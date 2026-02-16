from PIL import Image, ImageDraw, ImageFont

# Create transparent background
img = Image.new('RGBA', (800, 200), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Load font
try:
    font = ImageFont.truetype('C:/Windows/Fonts/corbell.ttf', 70)
except:
    try:
        font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 70)
    except:
        font = ImageFont.load_default()

# Text
text = 'MONA FLORIPA FASHION'

# Get text size
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

# Center text
x = (800 - text_width) // 2
y = (200 - text_height) // 2

# Draw text in off-white
draw.text((x, y), text, fill=(246, 243, 221, 255), font=font)

# Save
img.save('images/logo_clean.png')
print('Clean logo created successfully')
