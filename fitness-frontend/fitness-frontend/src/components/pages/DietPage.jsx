import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaAppleAlt, FaFire, FaClock, FaHeart, FaSearch, FaSeedling, FaLeaf, FaDrumstickBite, FaFish } from 'react-icons/fa';

const DietPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Diet categories
  const categories = [
    { id: 'all', name: 'All Recipes', icon: FaUtensils },
    { id: 'breakfast', name: 'Breakfast', icon: FaAppleAlt },
    { id: 'lunch', name: 'Lunch', icon: FaUtensils },
    { id: 'dinner', name: 'Dinner', icon: FaUtensils },
    { id: 'vegetarian', name: 'Vegetarian', icon: FaSeedling },
    { id: 'vegan', name: 'Vegan', icon: FaLeaf },
    { id: 'high-protein', name: 'High Protein', icon: FaDrumstickBite },
    { id: 'low-carb', name: 'Low Carb', icon: FaFish },
  ];

  // Sample meal data
  const meals = [
    {
      id: 1,
      title: 'Avocado Toast with Eggs',
      category: 'breakfast',
      calories: 350,
      protein: 18,
      carbs: 25,
      fat: 22,
      prepTime: 15,
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Creamy avocado on whole grain toast topped with perfectly cooked eggs.',
      ingredients: ['2 slices whole grain bread', '1 ripe avocado', '2 eggs', 'Cherry tomatoes', 'Salt & pepper'],
      instructions: ['Toast bread slices', 'Mash avocado and spread on toast', 'Cook eggs to preference', 'Season and serve with tomatoes'],
      nutrition: { protein: '18g', carbs: '25g', fat: '22g', fiber: '8g' }
    },
    {
      id: 2,
      title: 'Quinoa Power Bowl',
      category: 'lunch',
      calories: 420,
      protein: 22,
      carbs: 45,
      fat: 15,
      prepTime: 25,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.',
      ingredients: ['1 cup quinoa', 'Mixed vegetables', 'Chickpeas', 'Tahini', 'Lemon juice', 'Olive oil'],
      instructions: ['Cook quinoa', 'Roast vegetables', 'Prepare tahini dressing', 'Combine all ingredients'],
      nutrition: { protein: '22g', carbs: '45g', fat: '15g', fiber: '12g' }
    },
    {
      id: 3,
      title: 'Grilled Salmon with Asparagus',
      category: 'dinner',
      calories: 380,
      protein: 35,
      carbs: 12,
      fat: 20,
      prepTime: 20,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Perfectly grilled salmon served with roasted asparagus and lemon.',
      ingredients: ['Salmon fillet', 'Asparagus', 'Lemon', 'Garlic', 'Olive oil', 'Herbs'],
      instructions: ['Season salmon', 'Grill salmon and asparagus', 'Squeeze lemon juice', 'Garnish with herbs'],
      nutrition: { protein: '35g', carbs: '12g', fat: '20g', fiber: '4g' }
    },
    {
      id: 4,
      title: 'Vegan Buddha Bowl',
      category: 'vegan',
      calories: 320,
      protein: 15,
      carbs: 50,
      fat: 10,
      prepTime: 20,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Colorful plant-based bowl with grains, legumes, and fresh vegetables.',
      ingredients: ['Brown rice', 'Black beans', 'Sweet potato', 'Kale', 'Avocado', 'Tahini dressing'],
      instructions: ['Cook brown rice', 'Roast sweet potato', 'Massage kale', 'Assemble bowl with all ingredients'],
      nutrition: { protein: '15g', carbs: '50g', fat: '10g', fiber: '14g' }
    },
    {
      id: 5,
      title: 'Greek Chicken Salad',
      category: 'high-protein',
      calories: 280,
      protein: 30,
      carbs: 8,
      fat: 14,
      prepTime: 15,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Fresh salad with grilled chicken, feta, olives, and Mediterranean vegetables.',
      ingredients: ['Chicken breast', 'Mixed greens', 'Feta cheese', 'Cucumber', 'Olives', 'Greek dressing'],
      instructions: ['Grill chicken breast', 'Chop vegetables', 'Combine all ingredients', 'Add dressing and toss'],
      nutrition: { protein: '30g', carbs: '8g', fat: '14g', fiber: '3g' }
    },
    {
      id: 6,
      title: 'Berry Protein Smoothie',
      category: 'breakfast',
      calories: 240,
      protein: 25,
      carbs: 28,
      fat: 6,
      prepTime: 5,
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Quick and nutritious smoothie packed with protein and antioxidants.',
      ingredients: ['Mixed berries', 'Protein powder', 'Greek yogurt', 'Almond milk', 'Spinach', 'Chia seeds'],
      instructions: ['Combine all ingredients in blender', 'Blend until smooth', 'Serve immediately'],
      nutrition: { protein: '25g', carbs: '28g', fat: '6g', fiber: '7g' }
    },
    {
      id: 7,
      title: 'Zucchini Noodles with Pesto',
      category: 'low-carb',
      calories: 210,
      protein: 12,
      carbs: 15,
      fat: 14,
      prepTime: 15,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Fresh zucchini noodles tossed in homemade basil pesto.',
      ingredients: ['Zucchini', 'Basil', 'Pine nuts', 'Parmesan', 'Garlic', 'Olive oil'],
      instructions: ['Spiralize zucchini', 'Make pesto sauce', 'Toss zucchini with pesto', 'Top with Parmesan'],
      nutrition: { protein: '12g', carbs: '15g', fat: '14g', fiber: '5g' }
    },
    {
      id: 8,
      title: 'Vegetable Stir Fry',
      category: 'vegetarian',
      calories: 290,
      protein: 14,
      carbs: 35,
      fat: 12,
      prepTime: 20,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Quick and colorful vegetable stir fry with tofu and sesame sauce.',
      ingredients: ['Mixed vegetables', 'Tofu', 'Soy sauce', 'Ginger', 'Garlic', 'Sesame oil'],
      instructions: ['Press and cube tofu', 'Stir-fry vegetables', 'Add tofu and sauce', 'Cook until heated through'],
      nutrition: { protein: '14g', carbs: '35g', fat: '12g', fiber: '8g' }
    }
  ];

  // Filter meals based on category and search term
  const filteredMeals = meals.filter(meal => {
    const matchesCategory = activeCategory === 'all' || meal.category === activeCategory;
    const matchesSearch = meal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meal.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Meal Plan suggestions
  const mealPlans = [
    {
      id: 1,
      name: 'Weight Loss',
      description: 'Calorie-controlled meals for sustainable weight loss',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '4 weeks',
      calories: '1500-1800'
    },
    {
      id: 2,
      name: 'Muscle Gain',
      description: 'High-protein diet to support muscle growth',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '8 weeks',
      calories: '2500-3000'
    },
    {
      id: 3,
      name: 'Plant-Based',
      description: 'Delicious vegan recipes for optimal health',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      duration: '6 weeks',
      calories: '1800-2200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nutrition & Diet Plans</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Fuel your body with delicious, healthy recipes tailored to your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personalized Meal Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly crafted meal plans designed for specific fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealPlans.map(plan => (
              <div key={plan.id} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img 
                  src={plan.image} 
                  alt={plan.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {plan.duration}</span>
                    <span>{plan.calories} cal/day</span>
                  </div>
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Healthy Recipes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMeals.map(meal => (
              <div key={meal.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Meal Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={meal.image} 
                    alt={meal.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <FaHeart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Meal Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200 mb-2">
                    {meal.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {meal.description}
                  </p>

                  {/* Nutrition Info */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="text-center">
                      <FaFire className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700">{meal.calories}</span>
                      <p className="text-xs text-gray-500">Cal</p>
                    </div>
                    <div className="text-center">
                      <FaDrumstickBite className="w-4 h-4 text-red-500 mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700">{meal.protein}g</span>
                      <p className="text-xs text-gray-500">Protein</p>
                    </div>
                    <div className="text-center">
                      <FaAppleAlt className="w-4 h-4 text-green-500 mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700">{meal.carbs}g</span>
                      <p className="text-xs text-gray-500">Carbs</p>
                    </div>
                    <div className="text-center">
                      <FaUtensils className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700">{meal.fat}g</span>
                      <p className="text-xs text-gray-500">Fat</p>
                    </div>
                  </div>

                  {/* Prep Time */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaClock className="w-4 h-4 mr-2 text-teal-500" />
                    <span>{meal.prepTime} minutes prep</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedMeal(meal)}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      View Recipe
                    </button>
                    <button className="p-2 border border-gray-300 hover:border-teal-300 rounded-lg transition-colors duration-200">
                      <FaHeart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMeals.length === 0 && (
            <div className="text-center py-12">
              <FaUtensils className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedMeal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedMeal(null)}></div>
          
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all">
              <button
                onClick={() => setSelectedMeal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 transition-colors duration-200 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img 
                src={selectedMeal.image} 
                alt={selectedMeal.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedMeal.title}</h2>
                <p className="text-gray-600 mb-6">{selectedMeal.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-lg font-bold text-teal-600">{selectedMeal.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{selectedMeal.protein}g</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{selectedMeal.carbs}g</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-lg font-bold text-yellow-600">{selectedMeal.fat}g</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
                    <ul className="space-y-2">
                      {selectedMeal.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Instructions</h3>
                    <ol className="space-y-2">
                      {selectedMeal.instructions.map((instruction, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                            {index + 1}
                          </span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Nutrition Journey</h2>
          <p className="text-teal-100 text-lg mb-8">
            Get personalized meal plans and track your nutrition with our premium features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Get Started Free
            </Link>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DietPage;