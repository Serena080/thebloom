function GardenIdeas() {
  return (
    <div className="container py-5">
      <h1>Garden Design Ideas</h1>
      <p>Explore beautiful garden layouts and inspiration.</p>

     <div className="gardenideas">
  <h2>Styles of Gardens</h2>

  <h3>Formal Garden</h3>
  <ul>
    <li>Symmetrical layout, geometric shapes</li>
    <li>Neatly trimmed hedges, topiaries, fountains</li>
    <li>Best for classical, structured aesthetics</li>
  </ul>

  <h3>Cottage Garden</h3>
  <ul>
    <li>Informal, cozy, and abundant</li>
    <li>Mix of flowers, herbs, and vegetables</li>
    <li>Winding paths and rustic furniture</li>
  </ul>

  <h3>Japanese Garden</h3>
  <ul>
    <li>Minimalist, contemplative space</li>
    <li>Elements: rocks, water features, bamboo, bonsai</li>
    <li>Focus on tranquility and natural flow</li>
  </ul>

  <h3>Mediterranean Garden</h3>
  <ul>
    <li>Drought-tolerant plants like lavender, rosemary, and olive trees</li>
    <li>Terracotta pots, tiled paths, sunny areas</li>
  </ul>

  <h3>Wild/Natural Garden</h3>
  <ul>
    <li>Encourages local flora and fauna</li>
    <li>Native plants, meadows, and natural ponds</li>
    <li>Low maintenance, eco-friendly</li>
  </ul>

  {/* Right side: Images */}
        <div className="flex-1 p-8 bg-gray-50 flex flex-col items-center gap-6">
          <img 
            src="https://images.unsplash.com/photo-1612831661871-df2a5f60f5db?auto=format&fit=crop&w=600&q=80" 
            alt="Cottage Garden Example" 
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1618221273151-3e0f79f16d20?auto=format&fit=crop&w=600&q=80" 
            alt="Modern Garden Example" 
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1618221628941-1d9c1f6db85c?auto=format&fit=crop&w=600&q=80" 
            alt="Japanese Garden Example" 
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
</div>
    </div>
  );
}

export default GardenIdeas;