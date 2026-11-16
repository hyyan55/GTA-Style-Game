#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/public/models"
mkdir -p "$OUT"

download_drive() {
  local id="$1" name="$2" min_bytes="$3"
  local target="$OUT/$name"
  if [ -s "$target" ] && [ "$(wc -c < "$target")" -ge "$min_bytes" ]; then
    echo "Already downloaded: $name"
    return
  fi
  echo "Downloading $name..."
  curl -fL --retry 3 --retry-delay 2 --connect-timeout 25 \
    -A "Mozilla/5.0" \
    "https://drive.usercontent.google.com/download?id=$id&export=download&authuser=0&confirm=t" \
    -o "$target.tmp"
  local size
  size="$(wc -c < "$target.tmp")"
  if [ "$size" -lt "$min_bytes" ] || head -c 300 "$target.tmp" | grep -qiE '<!doctype html|<html'; then
    rm -f "$target.tmp"
    echo "Download validation failed for $name (received $size bytes)." >&2
    exit 1
  fi
  mv "$target.tmp" "$target"
  echo "Saved $name ($size bytes)"
}

download_drive "1rrj82IYNaSWj5ySxR6fW9oojyHFiW7_r" "Casual_Male.gltf" 1000000
download_drive "1Xxe0nYbAx5epeoY8nT9kY48e9vG3LPWK" "NormalCar1.fbx" 50000
download_drive "1r4gr34s-cNetFINZio-M4i8m2PgzVq_5" "SUV.fbx" 50000
download_drive "1rImCdSNI-FWIFDtJ1dGgVd6Gu9OTY47v" "SportsCar.fbx" 50000
download_drive "12nW4fVokNMpylkTjLwvq02goUdylF6Dx" "Cop.fbx" 50000

echo "All SHADOW CITY 3D assets are ready in public/models."
