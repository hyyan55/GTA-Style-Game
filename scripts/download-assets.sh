#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHAR_DIR="$ROOT/public/models"
CAR_DIR="$CHAR_DIR/vehicles"
mkdir -p "$CHAR_DIR" "$CAR_DIR"

download_url() {
  local url="$1" target="$2" min_bytes="$3"
  if [ -s "$target" ] && [ "$(wc -c < "$target")" -ge "$min_bytes" ]; then
    echo "Already downloaded: ${target#"$ROOT"/}"
    return
  fi
  echo "Downloading ${target#"$ROOT"/}..."
  curl -fL --retry 3 --retry-delay 2 --connect-timeout 25 \
    -A "Mozilla/5.0" "$url" -o "$target.tmp"
  local size
  size="$(wc -c < "$target.tmp")"
  if [ "$size" -lt "$min_bytes" ] || head -c 300 "$target.tmp" | grep -qiE '<!doctype html|<html'; then
    rm -f "$target.tmp"
    echo "Download validation failed: ${target#"$ROOT"/} ($size bytes)." >&2
    exit 1
  fi
  mv "$target.tmp" "$target"
  echo "Saved ${target#"$ROOT"/} ($size bytes)"
}

download_drive() {
  local id="$1" target="$2" min_bytes="$3"
  download_url "https://drive.usercontent.google.com/download?id=$id&export=download&authuser=0&confirm=t" "$target" "$min_bytes"
}

# Quaternius Superhero Male: CC0 mesh with the skeleton calibrated by this project.
download_url "https://raw.githubusercontent.com/programasweights/avatar/main/public/assets/character.glb" "$CHAR_DIR/character.glb" 700000
download_url "https://raw.githubusercontent.com/programasweights/avatar/main/public/assets/QUATERNIUS-LICENSE.txt" "$CHAR_DIR/QUATERNIUS-LICENSE.txt" 500

# Quaternius Cars Pack: CC0 vehicle meshes.
download_drive "1rImCdSNI-FWIFDtJ1dGgVd6Gu9OTY47v" "$CAR_DIR/SportsCar.fbx" 50000
download_drive "1r4gr34s-cNetFINZio-M4i8m2PgzVq_5" "$CAR_DIR/SUV.fbx" 50000
download_drive "1Xxe0nYbAx5epeoY8nT9kY48e9vG3LPWK" "$CAR_DIR/NormalCar1.fbx" 50000
download_drive "12nW4fVokNMpylkTjLwvq02goUdylF6Dx" "$CAR_DIR/Cop.fbx" 50000

# Check file signatures, not just download sizes.
if ! head -c 4 "$CHAR_DIR/character.glb" | grep -aq '^glTF'; then
  echo "Invalid character.glb: GLB signature missing." >&2
  exit 1
fi
for model in "$CAR_DIR/SportsCar.fbx" "$CAR_DIR/SUV.fbx" "$CAR_DIR/NormalCar1.fbx" "$CAR_DIR/Cop.fbx"; do
  if ! head -c 18 "$model" | grep -aq 'Kaydara FBX Binary'; then
    echo "Invalid FBX model: ${model#"$ROOT"/}" >&2
    exit 1
  fi
done

echo "All 3D models downloaded and validated."
