# Image Setup Instructions

## Required Images

You need to save these 2 images in the same folder as your HTML files:

### 1. Truck Image (Foreground)
- **Filename:** `trucks-foreground.png`
- **Source:** The image showing the white and red Workhorse trucks
- **How to save:** Right-click the truck image in the chat → Save as `trucks-foreground.png`

### 2. Quarry Image (Background)
- **Filename:** `quarry-background.jpeg` 
- **Source:** The rocky quarry/mining site image
- **How to save:** Right-click the quarry image in the chat → Save as `quarry-background.jpeg`

## File Structure Should Look Like:
```
your-folder/
├── index.html
├── styles.css
├── demo.html
├── preview.html
├── trucks-foreground.png    ← Save truck image here
└── quarry-background.jpeg   ← Save quarry image here
```

## After Saving Images:
1. Refresh http://localhost:8000/index.html
2. Your images should now display properly!

The website pulls images from the same folder because that's how local web servers work - they serve files from the current directory.