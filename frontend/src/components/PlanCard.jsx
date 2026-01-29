const PlanCard = ({ type, plan, onSelect, isPopular }) => {
  const { price, duration, features, internship, certificate } = plan;

  return (
    <div className={`card relative flex flex-col ${
      isPopular ? 'border-2 border-primary-500 shadow-xl scale-105 z-10' : 'bg-site-surface'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
          MOST POPULAR
        </div>
      )}

      <div className="p-8 pb-0 text-center">
        <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-primary-600' : 'text-secondary-900'}`}>
          {type} Plan
        </h3>
        <div className="flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-secondary-900 mt-1 mr-1">₹</span>
          <span className="text-5xl font-extrabold text-secondary-900 tracking-tight">
            {price.toLocaleString()}
          </span>
        </div>
        <p className="text-secondary-500 text-sm font-medium mb-8">
          Validity: {duration}
        </p>
      </div>

      <div className="p-8 pt-0 flex-grow">
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-secondary-600">
              <span className="text-primary-500 mr-3 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
          <li className="flex items-start text-sm pt-2 border-t border-secondary-50">
            <span className={internship ? 'text-primary-500 mr-3' : 'text-secondary-300 mr-3'}>
              {internship ? '✅' : '❌'}
            </span>
            <span className={internship ? 'text-secondary-700 font-medium' : 'text-secondary-400'}>
              Industry Internship
            </span>
          </li>
          <li className="flex items-start text-sm">
            <span className={certificate ? 'text-primary-500 mr-3' : 'text-secondary-300 mr-3'}>
              {certificate ? '✅' : '❌'}
            </span>
            <span className={certificate ? 'text-secondary-700 font-medium' : 'text-secondary-400'}>
              Professional Certificate
            </span>
          </li>
        </ul>

        <button
          onClick={() => onSelect(type, plan)}
          className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
            isPopular 
              ? 'btn-primary' 
              : 'bg-secondary-900 text-white hover:bg-secondary-800'
          }`}
        >
          Select {type}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
