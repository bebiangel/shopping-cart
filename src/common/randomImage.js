const img = [
  "https://images.unsplash.com/photo-1539245670218-2c8f6e8656f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65b89a8d88fb1df4fe8ecb60282d78a0&auto=format&fit=crop&w=3334&q=80",
  "https://images.unsplash.com/photo-1539359220977-30a8fbc7329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18c6b7d39186822b26a3797b950465fe&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1524109698438-e9d17a5c8545?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5339ed4dbc283a902b85df5091624a58&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1496571171473-714e84da7a72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0d9a2a9de9cbdcc3fb59eba21329c5b&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1521588000085-567b389aad2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b14289f1e6e8b150ebc470c64b28805&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1539284629373-cdeda2f0d558?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ef11ce2169c0ba1a36ef5504e8ac9fb&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1525726556432-369f849a35cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24475b4ef7544e595f32ac99041ddfe1&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1524459595256-54d0ee4c29e8?ixlib=rb-0.3.5&s=94dfb8e28bbdc5e83f2ac2840c9f41b5&auto=format&fit=crop&w=882&q=80"
];

export function randomImage() {
  return img[Math.floor(Math.random() * 8)];
}
