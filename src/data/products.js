const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Portable Bluetooth speaker with deep bass, 12-hour playtime, and water-resistant design.",
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1733641839419-7b9de83d7a0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "True wireless earbuds with active noise cancellation and compact charging case.",
  },
  {
    id: 11,
    name: "Portable SSD 1TB",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop",
    description:
      "Ultra-fast 1TB portable SSD with USB-C connectivity for quick backups and transfers.",
  },
  {
    id: 12,
    name: "Ergonomic Chair",
    price: 229.99,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop",
    description:
      "Comfortable ergonomic chair with lumbar support, breathable mesh, and adjustable height.",
  },
  {
    id: 13,
    name: "Smart LED Light Strip",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop",
    description:
      "Color-changing smart LED strip with app control and music sync modes.",
  },
  {
    id: 14,
    name: "4K Monitor",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    description:
      "27-inch 4K UHD monitor with IPS panel, vivid colors, and ultra-thin bezels.",
  },
  {
    id: 15,
    name: "Gaming Mouse Pad",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    description:
      "Extended gaming mouse pad with stitched edges and smooth, precise surface.",
  },
  {
    id: 16,
    name: "USB Desk Fan",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=500&fit=crop",
    description:
      "Quiet USB desk fan with adjustable tilt and three speed settings.",
  },
  {
    id: 17,
    name: "Wireless Charger",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description:
      "Fast wireless charging pad compatible with Qi-enabled phones and earbuds.",
  },
  {
    id: 18,
    name: "Desk Organizer",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&h=500&fit=crop",
    description:
      "Minimalist desk organizer with compartments for pens, gadgets, and accessories.",
  },
  {
    id: 19,
    name: "Graphics Tablet",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    description:
      "Drawing tablet with pressure-sensitive pen for digital art and design work.",
  },
  {
    id: 20,
    name: "Wi-Fi Router",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=500&fit=crop",
    description:
      "Dual-band Wi-Fi 6 router with wide coverage and high-speed connectivity.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
