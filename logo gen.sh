#!/bin/bash

# NOM DE TON FICHIER SVG EN ENTREE
INPUT_SVG="logo.svg"

# LISTE DES TAILLES SOUHAITEES (en pixels)
SIZES=(16 32 48 64 128)

# Verification que Inkscape est installe
if ! command -v inkscape &> /dev/null; then
    echo "Erreur : Inkscape n'est pas installé."
    exit 1
fi

# Verification que le fichier existe
if [ ! -f "$INPUT_SVG" ]; then
    echo "Erreur : Le fichier '$INPUT_SVG' n'existe pas dans ce dossier."
    exit 1
fi

echo "Début de la génération avec Inkscape..."

# Boucle sur chaque taille
for size in "${SIZES[@]}"; do
    OUTPUT_PNG="icon-${size}.png"
    echo "Génération de $OUTPUT_PNG ($size x $size)..."

    # -w : largeur
    # -h : hauteur
    # -o : fichier de sortie
    inkscape "$INPUT_SVG" -o "$OUTPUT_PNG" -w "$size" -h "$size" > /dev/null
done

echo "Terminé !"