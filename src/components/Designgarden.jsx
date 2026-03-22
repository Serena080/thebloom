function DesignGarden() {
  return (
    <div className="container py-5">
      <h1 className="text-4xl font-bold mb-3">Design Your Garden</h1>
      <p className="mb-8 text-gray-600">Create your dream garden layout.</p>

      <div className="garden-dashboard flex min-h-screen gap-8">
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

        
      </div>
    </div>
  );
}

export default DesignGarden;