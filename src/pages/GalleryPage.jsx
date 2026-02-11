import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLeaf, FaUtensils, FaTint, FaTshirt, FaCross, FaPaw, FaExclamationTriangle,
  FaTimes, FaChevronLeft, FaChevronRight, FaHandshake
} from 'react-icons/fa';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const categories = [
    { id: 'All', label: 'All', icon: null },
    { id: 'Environment', label: 'Environment', icon: FaLeaf },
    { id: 'Food', label: 'Food', icon: FaUtensils },
    { id: 'Water', label: 'Water', icon: FaTint },
    { id: 'Clothing', label: 'Clothing & Medical', icon: FaTshirt },
    { id: 'LastRites', label: 'Last Rites', icon: FaCross },
    { id: 'Animal', label: 'Animal Care', icon: FaPaw },
    { id: 'Disaster', label: 'Disaster Relief', icon: FaExclamationTriangle }
  ];

  const galleryImages = [
    // Environmental Activities
    {
      id: 1,
      category: 'Environment',
      title: 'Tree Plantation Drive',
      description: 'Community members planting saplings together',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'Environment',
      title: 'Free Plant Distribution',
      description: 'Distributing plants to schools and households',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'Environment',
      title: 'Green Awareness Event',
      description: 'Eco-friendly awareness program in community',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Food Distribution
    {
      id: 4,
      category: 'Food',
      title: 'Free Meal Distribution',
      description: 'Serving nutritious meals to those in need',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'Food',
      title: 'Festival Food Drive',
      description: 'Special food drive during community festival',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'Food',
      title: 'Community Kitchen',
      description: 'Volunteers preparing meals for distribution',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Water Relief
    {
      id: 7,
      category: 'Water',
      title: 'Water Distribution Point',
      description: 'Clean drinking water supply in public space',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      category: 'Water',
      title: 'Summer Relief Program',
      description: 'Hydration support during peak summer',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      category: 'Water',
      title: 'Event Hydration Support',
      description: 'Water supply at community events',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Clothing & Medical
    {
      id: 10,
      category: 'Clothing',
      title: 'Cloth Distribution Drive',
      description: 'Distributing clothes to underprivileged families',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      category: 'Clothing',
      title: 'Medical Aid Camp',
      description: 'Providing basic medical support to community',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      category: 'Clothing',
      title: 'Donation Sorting',
      description: 'Volunteers organizing donated items',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Last Rites
    {
      id: 13,
      category: 'LastRites',
      title: 'Dignified Service',
      description: 'Respectful final rites for the departed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 14,
      category: 'LastRites',
      title: 'Compassionate Support',
      description: 'Team providing dignified last rites service',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Animal Care
    {
      id: 15,
      category: 'Animal',
      title: 'Radium Belt Distribution',
      description: 'Distributing safety belts to stray animals',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 16,
      category: 'Animal',
      title: 'Animal Feeding Program',
      description: 'Caring for stray animals in the community',
      image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 17,
      category: 'Animal',
      title: 'Animal Safety Awareness',
      description: 'Spreading awareness about animal welfare',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Disaster Relief
    {
      id: 18,
      category: 'Disaster',
      title: 'Flood Relief Camp',
      description: 'Emergency support during flood situation',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 19,
      category: 'Disaster',
      title: 'Emergency Distribution',
      description: 'Distributing relief kits to affected families',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 20,
      category: 'Disaster',
      title: 'Disaster Response Team',
      description: 'On-ground assistance during calamities',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80)"
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              ANAND YOUTH – GALLERY
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Moments of Service, Compassion & Community Impact
            </p>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              These photographs capture the spirit of Anand Youth — the smiles we share, the hands we support, 
              and the lives we touch. Every moment reflects our commitment to serve humanity and protect the 
              world around us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Description */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              The Anand Youth Gallery showcases the heartfelt moments captured during our social service activities. 
              Every photo reflects kindness, community effort, youth participation, and real change happening on ground.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              These memories inspire us to continue serving with passion, responsibility, and humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {CategoryIcon && <CategoryIcon className="text-lg" />}
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {imageErrors[image.id] ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">📷</div>
                          <p className="text-gray-600 text-sm font-medium">{image.title}</p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [image.id]: true }));
                        }}
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm md:text-base mb-1">{image.title}</h3>
                      <p className="text-white/90 text-xs md:text-sm">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
                aria-label="Close lightbox"
              >
                <FaTimes className="text-gray-800 text-xl" />
              </button>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-800 text-xl" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-800 text-xl" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {imageErrors[selectedImage.id] ? (
                  <div className="w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📷</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                      <p className="text-gray-600">{selectedImage.description}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [selectedImage.id]: true }));
                    }}
                  />
                )}
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {selectedImage.description}
                  </p>
                  {filteredImages.length > 1 && (
                    <p className="text-gray-500 text-sm mt-4">
                      {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Want to be part of these moments?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Join Anand Youth as a Volunteer and help us create more meaningful moments of service and compassion.
            </p>
            <Link
              to="/volunteer"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <FaHandshake className="mr-2" />
              Join Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

