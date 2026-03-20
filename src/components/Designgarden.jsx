function DesignGarden() {
  return (
    <div className="container py-5">
      <h1>Design Your Garden</h1>
      <p>Create your dream garden layout.</p>

      <div className="garden-dashboard flex min-h-screen">
  {/* Left side: Core Features & Workflow */}
  <div className="designgarden w-1/2 p-8 overflow-y-auto border-r border-gray-200">
    <h2 className="text-3xl font-bold mb-6">Core Features</h2>

    <h3 className="text-xl font-semibold mt-4">Drag & Drop Garden Layout</h3>
    <ul className="list-disc pl-5">
      <li>Drag plant icons, furniture, and water features onto a virtual plot</li>
      <li>Resize, rotate, and place elements freely</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Plant Database</h3>
    <ul className="list-disc pl-5">
      <li>Search by type, season, sun/shade needs, growth height</li>
      <li>Info cards with care tips, flowering months, and companion plants</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Zoning & Themes</h3>
    <ul className="list-disc pl-5">
      <li>Suggest zones: flower beds, vegetable patches, relaxation spots</li>
      <li>Pre-built templates: Japanese, Cottage, Formal, Mediterranean</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Color & Texture Preview</h3>
    <ul className="list-disc pl-5">
      <li>Shows seasonal colors</li>
      <li>Visualize textures of plants and surfaces</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Sunlight & Shade Mapping</h3>
    <ul className="list-disc pl-5">
      <li>Drag a “sun path” across the layout</li>
      <li>Tool highlights shaded areas and optimal plant locations</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Irrigation & Maintenance Planner</h3>
    <ul className="list-disc pl-5">
      <li>Plan watering schedules</li>
      <li>Plant spacing and care guides</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3D/AR View (Advanced)</h3>
    <ul className="list-disc pl-5">
      <li>3D preview of garden</li>
      <li>Augmented reality to see plants in your real space</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Export & Print</h3>
    <ul className="list-disc pl-5">
      <li>Export garden plan as PDF or image</li>
      <li>Share with landscapers or friends</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 mb-4">Example Workflow</h2>
    <ol className="list-decimal pl-5 space-y-2">
      <li>Select a garden style (Cottage, Japanese, Modern, etc.)</li>
      <li>Upload plot dimensions or select a template</li>
      <li>Drag plants, trees, and features into zones</li>
      <li>Adjust placement using sunlight and water info</li>
      <li>View preview and adjust colors/textures</li>
      <li>Export or save for future reference</li>
    </ol>
  </div>

  {/* Right side: Placeholder for images or interactive preview */}
  <div className="flex-1 p-8 bg-gray-50">
    <p className="text-gray-500 text-center mt-20">
      Hover over features or select steps to preview images or AR/3D views here.
    </p>
  </div>
</div>
    </div>
  );
}

export default DesignGarden;