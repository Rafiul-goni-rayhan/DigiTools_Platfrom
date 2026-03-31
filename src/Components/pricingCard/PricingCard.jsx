import React from 'react';

const PricingCard = ({ plan }) => (
  <div className={`relative p-8 rounded-3xl border transition-all ${
    plan.isPopular ? 'bg-linear-to-r from-purple-900 to-purple-500 text-white scale-105 shadow-xl border-none' : 'bg-slate-50 text-slate-900 border-slate-100'
  }`}>
    {plan.isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-bold">{plan.name}</h3>
    <p className={`text-xs mb-4 ${plan.isPopular ? 'text-purple-100' : 'text-slate-500'}`}>{plan.sub}</p>
    <div className="text-3xl font-bold mb-6">${plan.price}<span className="text-sm font-normal">/Month</span></div>
    
    <ul className="space-y-3 mb-8 text-sm">
      {plan.features.map((feat, i) => (
        <li key={i} className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
          {feat}
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 rounded-full font-bold text-sm transition ${
      plan.isPopular ? 'bg-white text-[#8B5CF6] hover:bg-slate-100' : 'bg-linear-to-r from-purple-900 to-purple-500 text-white hover:bg-opacity-90'
    }`}>
      {plan.btn}
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    { name: 'Starter', sub: 'Perfect for getting started', price: '0', btn: 'Get Started Free', features: ['10 free tools', 'Basic templates', 'Community support'] },
    { name: 'Pro', sub: 'Best for professionals', price: '29', btn: 'Start Pro Trial', isPopular: true, features: ['All premium tools', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'] },
    { name: 'Enterprise', sub: 'For teams and businesses', price: '99', btn: 'Contact Sales', features: ['Everything in Pro', 'Team collaboration', 'Custom branding', 'SLA guarantee'] }
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
      <p className="text-slate-500 mb-12">Choose the plan that fits your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => <PricingCard key={i} plan={p} />)}
      </div>
    </section>
  );
};

export default Pricing;