

export default function RecommendationCard({ asana }) {
  return (
   <div className="">

     <div className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition-all">
      <img
        src={asana.image}
        alt={asana.name}
        className="w-full h-60 object-cover rounded-xl mb-4"
        onError={(e) => (e.target.src = "/asana-images/default.jpg")}
      />
      <h4 className="text-lg font-bold text-gray-900 mb-2">{asana.name}</h4>
      <p className="text-gray-900 text-md mb-3">
        <strong className="text-gray-900 text-xl font-bold">Benefits:</strong> {asana.benefits}
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-900 text-md">
        {asana.steps?.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
   </div>
  );
}