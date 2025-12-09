#!/bin/bash

# Script untuk mengumpulkan semua file dari LMS APP ke dalam satu file text
# Usage: ./collect-lms-files.sh

# Warna untuk output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Konfigurasi
SOURCE_DIR="d:/READY-TO-SHIP/LMS-APP/web"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
OUTPUT_FILE="lms-app-collection-${TIMESTAMP}.txt"

echo -e "${GREEN}=== LMS APP File Collection to Text Script ===${NC}\n"

# Cek apakah source directory ada
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory tidak ditemukan: $SOURCE_DIR${NC}"
    exit 1
fi

# Buat header file
echo "==================================================================" > "$OUTPUT_FILE"
echo "LMS APP - Complete File Collection" >> "$OUTPUT_FILE"
echo "Generated: $(date)" >> "$OUTPUT_FILE"
echo "Source: $SOURCE_DIR" >> "$OUTPUT_FILE"
echo "==================================================================" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Array berisi semua file yang akan dikumpulkan
declare -a files=(
    # Public files
    "public/file.svg"
    "public/globe.svg"
    "public/next.svg"
    "public/vercel.svg"
    "public/window.svg"
    
    # App pages
    "src/app/about/page.tsx"
    "src/app/blog/[slug]/page.tsx"
    "src/app/blog/page.tsx"
    "src/app/contact/page.tsx"
    "src/app/courses/[slug]/page.tsx"
    "src/app/courses/page.tsx"
    "src/app/lessons/[slug]/page.tsx"
    "src/app/resources/page.tsx"
    "src/app/error.tsx"
    "src/app/globals.css"
    "src/app/layout.tsx"
    "src/app/loading.tsx"
    "src/app/not-found.tsx"
    "src/app/page.tsx"
    
    # Blog components
    "src/components/blog/PostCard.tsx"
    
    # Course components
    "src/components/courses/CourseCard.tsx"
    "src/components/courses/CourseGrid.tsx"
    "src/components/courses/CourseInfo.tsx"
    "src/components/courses/Curriculum.tsx"
    
    # Home components
    "src/components/home/CTA.tsx"
    "src/components/home/FeaturedCourses.tsx"
    "src/components/home/Features.tsx"
    "src/components/home/Hero.tsx"
    "src/components/home/Stats.tsx"
    
    # Layout components
    "src/components/layout/Footer.tsx"
    "src/components/layout/Navbar.tsx"
    
    # Lesson components
    "src/components/lessons/Challenge.tsx"
    "src/components/lessons/CodeBlock.tsx"
    "src/components/lessons/Explanation.tsx"
    "src/components/lessons/LessonContent.tsx"
    "src/components/lessons/LessonHeader.tsx"
    "src/components/lessons/LessonNav.tsx"
    "src/components/lessons/NoteBox.tsx"
    
    # Resource components
    "src/components/resources/ResourceCard.tsx"
    
    # Shared components
    "src/components/shared/Breadcrumb.tsx"
    "src/components/shared/EmptyState.tsx"
    "src/components/shared/LevelBadge.tsx"
    "src/components/shared/LoadingSpinner.tsx"
    "src/components/shared/PageHeader.tsx"
    "src/components/shared/PriceBadge.tsx"
    "src/components/shared/SectionHeader.tsx"
    "src/components/shared/StatCard.tsx"
    
    # UI components
    "src/components/ui/accordion.tsx"
    "src/components/ui/avatar.tsx"
    "src/components/ui/badge.tsx"
    "src/components/ui/button.tsx"
    "src/components/ui/card.tsx"
    "src/components/ui/input.tsx"
    "src/components/ui/label.tsx"
    "src/components/ui/separator.tsx"
    "src/components/ui/sheet.tsx"
    "src/components/ui/tabs.tsx"
    "src/components/ui/textarea.tsx"
    
    # Lib files
    "src/lib/sanity/client.ts"
    "src/lib/sanity/env.ts"
    "src/lib/sanity/fetch.ts"
    "src/lib/sanity/image.ts"
    "src/lib/sanity/queries.ts"
    "src/lib/utils/index.ts"
    "src/lib/config.ts"
    "src/lib/utils.ts"
    
    # Types
    "src/types/index.ts"
    
    # Config files
    ".gitignore"
    "components.json"
    "eslint.config.mjs"
    "next-env.d.ts"
    "next.config.ts"
    "package.json"
    "postcss.config.mjs"
    "README.md"
    "tailwind.config.ts"
    "tsconfig.json"
)

# Counter
total_files=${#files[@]}
collected_files=0
missing_files=0
skipped_binary=0

echo -e "${YELLOW}Mengumpulkan ${total_files} file ke dalam text...${NC}\n"

# Proses setiap file
for file in "${files[@]}"; do
    source_file="${SOURCE_DIR}/${file}"
    
    if [ -f "$source_file" ]; then
        # Cek apakah file binary (SVG, ICO, dll)
        if [[ "$file" == *.svg ]] || [[ "$file" == *.ico ]]; then
            echo -e "${YELLOW}⊙${NC} $file (binary - skipped)"
            ((skipped_binary++))
            
            # Tulis info file binary
            echo "" >> "$OUTPUT_FILE"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
            echo "FILE: $file" >> "$OUTPUT_FILE"
            echo "TYPE: Binary file (not included in text output)" >> "$OUTPUT_FILE"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
            echo "" >> "$OUTPUT_FILE"
        else
            # Tulis file ke output
            echo "" >> "$OUTPUT_FILE"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
            echo "FILE: $file" >> "$OUTPUT_FILE"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
            echo "" >> "$OUTPUT_FILE"
            cat "$source_file" >> "$OUTPUT_FILE"
            echo "" >> "$OUTPUT_FILE"
            echo "" >> "$OUTPUT_FILE"
            
            echo -e "${GREEN}✓${NC} $file"
            ((collected_files++))
        fi
    else
        echo -e "${RED}✗${NC} $file (tidak ditemukan)"
        ((missing_files++))
        
        # Tulis info file missing
        echo "" >> "$OUTPUT_FILE"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
        echo "FILE: $file" >> "$OUTPUT_FILE"
        echo "STATUS: FILE NOT FOUND" >> "$OUTPUT_FILE"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

# Tulis summary di akhir file
echo "" >> "$OUTPUT_FILE"
echo "==================================================================" >> "$OUTPUT_FILE"
echo "SUMMARY" >> "$OUTPUT_FILE"
echo "==================================================================" >> "$OUTPUT_FILE"
echo "Total files: ${total_files}" >> "$OUTPUT_FILE"
echo "Collected: ${collected_files}" >> "$OUTPUT_FILE"
echo "Binary (skipped): ${skipped_binary}" >> "$OUTPUT_FILE"
echo "Missing: ${missing_files}" >> "$OUTPUT_FILE"
echo "Generated: $(date)" >> "$OUTPUT_FILE"
echo "==================================================================" >> "$OUTPUT_FILE"

# Tampilkan summary di console
echo -e "\n${GREEN}=== Ringkasan ===${NC}"
echo -e "Total file: ${total_files}"
echo -e "${GREEN}Dikumpulkan: ${collected_files}${NC}"
echo -e "${YELLOW}Binary (diskip): ${skipped_binary}${NC}"
echo -e "${RED}Tidak ditemukan: ${missing_files}${NC}"

# Tampilkan info file output
file_size=$(du -h "$OUTPUT_FILE" | cut -f1)
echo -e "\n${GREEN}✓ File berhasil dibuat: ${OUTPUT_FILE}${NC}"
echo -e "Ukuran file: ${file_size}"

# Hitung jumlah baris
line_count=$(wc -l < "$OUTPUT_FILE")
echo -e "Total baris: ${line_count}"

echo -e "\n${GREEN}Selesai!${NC}"