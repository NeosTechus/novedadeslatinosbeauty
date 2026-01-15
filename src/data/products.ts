import { Product } from "@/types/product";

// List of missing image numbers
const missing = [8289,8291,8294,8296,8297,8299,8300,8302,8304,8306,8308,8310,8312,8314,8317,8320,8323,8326,8327,8328,8330,8333,8336,8337,8339,8341,8344,8349,8352,8356,8362,8371,8398,8411,8416,8419,8431,8437,8440,8451,8454,8457,8458,8460,8470,8471,8478,8479,8480,8481,8482,8484,8485,8486,8487,8488,8489,8492,8493,8496,8497,8498,8499,8500,8502,8503,8504,8505,8506,8507,8508,8509,8510,8511,8512,8513,8514,8515,8516,8518,8519,8521,8523,8524,8526,8528,8529,8530,8531,8533,8535,8536,8537,8539,8540,8542,8543,8546,8548,8550,8551,8552,8553,8554,8555,8556,8557,8558,8559,8560,8561,8563,8564,8565,8566,8568,8569,8570,8571,8572,8573,8574,8577,8579,8580,8582,8583,8584,8585,8588,8590,8591,8593,8594,8595,8597,8598,8600,8603,8604,8606,8608,8609,8610,8611,8613,8614,8615,8616,8617,8618,8619,8620,8622,8623,8625,8626,8628,8629,8630,8631,8633,8634,8635,8636,8638,8639,8640,8642,8643,8644,8645,8646,8647,8649,8650,8651,8652,8654,8655,8656,8657,8658,8659,8661,8662,8664,8665,8667,8668,8669,8670,8673,8674,8675,8676,8678,8679,8680,8681,8683,8685,8688,8689,8690,8691,8692];

export const products: Product[] = [
          {
            id: 'party-wear-8672',
            name: 'Traditional Wear',
            image: '/photos/IMG_8672.jpg',
            category: 'Traditional Wear',
            subCategory: 'Traditional Dresses',
            description: 'Beautiful traditional dress for cultural events and celebrations.',
            isNew: false,
            inStock: true,
          },
        // ...existing code...
      // ...existing code...
    // ...existing code...
  // ...existing product objects with images only...
  // Ensure these Party Wear products are at the top
  {
    id: 'party-wear-8660',
    name: 'Traditional Wear #1',
    image: '/photos/IMG_8660.jpg',
    category: 'Traditional Wear',
    subCategory: 'Party Wear',
    description: 'Elegant party wear for special occasions.',
    isNew: false,
    inStock: true,
  },
  {
    id: 'party-wear-8663',
    name: 'Traditional Wear #2',
    image: '/photos/IMG_8663.jpg',
    category: 'Traditional Wear',
    subCategory: 'Party Wear',
    description: 'Elegant party wear for special occasions.',
    isNew: false,
    inStock: true,
  },
  {
    id: 'party-wear-8666',
    name: 'Traditional Wear #3',
    image: '/photos/IMG_8666.jpg',
    category: 'Traditional Wear',
    subCategory: 'Party Wear',
    description: 'Elegant party wear for special occasions.',
    isNew: false,
    inStock: true,
  },
  {
    id: 'party-wear-8671',
    name: 'Traditional Wear #4',
    image: '/photos/IMG_8671.jpg',
    category: 'Traditional Wear',
    subCategory: 'Religious Wear',
    description: 'Elegant party wear for special occasions.',
    isNew: false,
    inStock: true,
  },
    // Accessories > Casual Hats (IMG_8345 to IMG_8389), only include images not in missing
    ...[
      "IMG_8345.jpg","IMG_8346.jpg","IMG_8347.jpg","IMG_8348.jpg","IMG_8350.jpg","IMG_8351.jpg","IMG_8353.jpg","IMG_8354.jpg","IMG_8355.jpg","IMG_8357.jpg","IMG_8358.jpg","IMG_8359.jpg","IMG_8360.jpg","IMG_8361.jpg","IMG_8363.jpg","IMG_8364.jpg","IMG_8365.jpg","IMG_8366.jpg","IMG_8367.jpg","IMG_8368.jpg","IMG_8369.jpg","IMG_8370.jpg","IMG_8372.jpg","IMG_8373.jpg","IMG_8374.jpg","IMG_8375.jpg","IMG_8376.jpg","IMG_8377.jpg","IMG_8378.jpg","IMG_8379.jpg","IMG_8380.jpg","IMG_8381.jpg","IMG_8382.jpg","IMG_8383.jpg","IMG_8384.jpg","IMG_8385.jpg","IMG_8386.jpg","IMG_8387.jpg","IMG_8388.jpg","IMG_8389.jpg"
    ].filter(img => {
      const num = parseInt(img.match(/IMG_(\d+)/)?.[1] || "0", 10);
      return !missing.includes(num);
    }).map((img, i) => ({
      id: `accessories-casual-hat-${i+1}`,
      name: '',
      image: `/photos/${img}`,
      category: "Accessories",
      subCategory: "Casual Hats",
      description: "Stylish casual hat for everyday use.",
      isNew: false,
      inStock: true,
    })),
  // Footwear (removed Premium Western Boots, Industrial Work Boots, Women's Western Boots)
  // Soccer
  // ...removed Mexico National Team Jersey and Kids Soccer Jersey...
  // Shirts & Jackets
  // ...removed Embroidered Western Shirt and Graphic Print Shirt...
  // ...removed Leather Jacket...
  // Traditional Wear
  // ...removed Girl's Baptism Dress, Boy's First Communion Suit, and Traditional Mexican Dress...
  // Religious Items
  // ...removed Virgin Mary Figurine and Baptism Candle Set...
  // Religious Items > Candles (IMG_8596 to IMG_8612), only include images not in missing
  ...Array.from({length: 17}, (_, i) => {
    const imgNum = 8596 + i;
    if (missing.includes(imgNum)) return null;
    return {
      id: `candle-${imgNum}`,
      name: (imgNum === 8596 || imgNum === 8599 || imgNum === 8601 || imgNum === 8602 || imgNum === 8605 || imgNum === 8607 || imgNum === 8612) ? '' : `Candle Photo #${imgNum}`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Religious Items",
      subCategory: "Baptism and Communion Candles",
      description: "Beautiful candle for special ceremonies.",
      isNew: false,
      inStock: true,
    };
  }).filter(Boolean),
  // Accessories
  // ...removed Texan Cowboy Hat...
  // All shoe images as parent category 'Footwear' (no subCategory)
  ...[
    "IMG_8262.jpg","IMG_8263.jpg","IMG_8264.jpg","IMG_8265.jpg","IMG_8266.jpg","IMG_8267.jpg","IMG_8268.jpg","IMG_8269.jpg","IMG_8270.jpg","IMG_8271.jpg","IMG_8272.jpg","IMG_8273.jpg","IMG_8274.jpg","IMG_8275.jpg","IMG_8276.jpg","IMG_8277.jpg","IMG_8278.jpg","IMG_8279.jpg","IMG_8280.jpg","IMG_8281.jpg","IMG_8282.jpg","IMG_8283.jpg","IMG_8284.jpg","IMG_8285.jpg","IMG_8286.jpg","IMG_8287.jpg","IMG_8288.jpg","IMG_8290.jpg","IMG_8292.jpg","IMG_8293.jpg","IMG_8295.jpg","IMG_8298.jpg","IMG_8301.jpg","IMG_8303.jpg","IMG_8305.jpg","IMG_8307.jpg","IMG_8309.jpg","IMG_8311.jpg","IMG_8313.jpg","IMG_8315.jpg","IMG_8316.jpg","IMG_8318.jpg"
  ].map((img, i) => {
    if (i + 1 === 16 || i + 1 === 18 || i + 1 === 20 || i + 1 === 22 || i + 1 === 24 || i + 1 === 26 || i + 1 === 28 || i + 1 === 40 || i + 1 === 42) return null;
    const animalSkinBootsIdx = [15,17,19,21,23,25,27,29,30,31,32,33,34,35,36,37,38,39,41];
    const product: any = {
      id: `all-footwear-${i+1}`,
      name: i === 0 ? '' : i === 1 ? '' : i === 2 ? '' : i === 3 ? '' : i === 4 ? '' : i === 5 ? '' : i === 6 ? '' : i === 7 ? '' : i === 8 ? '' : i === 9 ? '' : i === 10 ? '' : i === 11 ? '' : i === 12 ? '' : i === 13 ? '' : i === 14 ? '' : i === 16 ? '' : i === 18 ? '' : i === 20 ? '' : i === 22 ? '' : i === 24 ? '' : i === 26 ? '' : i === 28 ? '' : i === 29 ? '' : i === 30 ? '' : i === 31 ? '' : i === 32 ? '' : i === 33 ? '' : i === 34 ? '' : i === 35 ? '' : i === 36 ? '' : i === 37 ? '' : i === 38 ? '' : i === 40 ? '' : `Footwear Photo #${i+1}`,
      image: `/photos/${img}`,
      category: "Footwear",
      ...(i < 14 ? { subCategory: "Western Leather Boots" } : {}),
      ...(animalSkinBootsIdx.includes(i+1) ? { subCategory: "Animal Skin boots" } : {}),
      description: "Durable and comfortable footwear.",
      isNew: false,
      inStock: true,
    };
    // Add sliding images for Footwear Photo #15
    if (i + 1 === 15) {
      product.slideImages = [
        "/photos/IMG_8277.jpg",
        "/photos/IMG_8276.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #17
    if (i + 1 === 17) {
      product.slideImages = [
        "/photos/IMG_8279.jpg",
        "/photos/IMG_8278.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #19
    if (i + 1 === 19) {
      product.slideImages = [
        "/photos/IMG_8281.jpg",
        "/photos/IMG_8280.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #21
    if (i + 1 === 21) {
      product.slideImages = [
        "/photos/IMG_8282.jpg",
        "/photos/IMG_8283.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #23
    if (i + 1 === 23) {
      product.slideImages = [
        "/photos/IMG_8284.jpg",
        "/photos/IMG_8285.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #25
    if (i + 1 === 25) {
      product.slideImages = [
        "/photos/IMG_8286.jpg",
        "/photos/IMG_8287.jpg"
      ];
    }
    // Add sliding images for Footwear Photo #27
    if (i + 1 === 27) {
      product.slideImages = [
        "/photos/IMG_8288.jpg",
        "/photos/IMG_8290.jpg"
      ];
    }
    return product;
  }).filter(Boolean),
  // Additional Footwear images (IMG_8318 to IMG_8334)
  ...[
    "IMG_8318.jpg","IMG_8319.jpg","IMG_8321.jpg","IMG_8322.jpg","IMG_8324.jpg","IMG_8325.jpg","IMG_8329.jpg","IMG_8331.jpg","IMG_8332.jpg"
  ].map((img, i) => {
    // Remove Footwear Photo Extra #1, #3, #5 and #8
    const extraNum = i + 1;
    if (extraNum === 1 || extraNum === 3 || extraNum === 5 || extraNum === 8) return null;
    // Add slideImages to Footwear Photo Extra #4 and #7
    const product: any = {
      id: `all-footwear-extra-${extraNum}`,
      name: (extraNum === 2 || extraNum === 4 || extraNum === 6 || extraNum === 7 || extraNum === 9) ? '' : `Footwear Photo Extra #${extraNum}`,
      image: `/photos/${img}`,
      category: "Footwear",
      subCategory: (extraNum === 2) ? "Animal Skin boots" : (extraNum >= 3 && extraNum <= 9) ? "Work Boots & Work Shoes" : undefined,
      description: "Durable and comfortable footwear.",
      isNew: false,
      inStock: true,
    };
    if (extraNum === 4) {
      product.slideImages = [
        `/photos/${img}`,
        `/photos/IMG_8324.jpg` // Footwear Photo Extra #5 image
      ];
    }
    if (extraNum === 7) {
      product.slideImages = [
        `/photos/${img}`,
        `/photos/IMG_8331.jpg` // Footwear Photo Extra #5 image
      ];
    }
    return product;
  }).filter(Boolean),
  // Accessories > Belts (IMG_8335 to IMG_8342)
  // Accessories > Cowboy Hats (IMG_8390 to IMG_8433), only include images not in missing
  ...Array.from({length: 44}, (_, i) => {
    const imgNum = 8390 + i;
    if (missing.includes(imgNum)) return null;
    // Remove specific cowboy hat images from the product list
    if ([8396, 8397, 8399, 8400, 8402, 8404, 8406, 8408, 8410, 8413, 8415, 8418, 8421, 8423, 8425, 8427].includes(imgNum)) return null;
    if (imgNum === 8401) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8401.jpg`,
          `/photos/IMG_8402.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8403) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8403.jpg`,
          `/photos/IMG_8404.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8405) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8405.jpg`,
          `/photos/IMG_8406.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8407) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8407.jpg`,
          `/photos/IMG_8408.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8409) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8409.jpg`,
          `/photos/IMG_8410.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8412) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8412.jpg`,
          `/photos/IMG_8413.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8414) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8414.jpg`,
          `/photos/IMG_8415.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8417) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8417.jpg`,
          `/photos/IMG_8418.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8420) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8420.jpg`,
          `/photos/IMG_8421.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8422) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8422.jpg`,
          `/photos/IMG_8423.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8424) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8425.jpg`,
          `/photos/IMG_8424.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8426) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8426.jpg`,
          `/photos/IMG_8427.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (imgNum === 8403) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        name: `Cowboy Hat Photo #${imgNum}`,
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8403.jpg`,
          `/photos/IMG_8404.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    if (i === 0) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        name: "",
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8390.jpg`,
          `/photos/IMG_8391.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    } else if (i === 1 || i === 3) {
      return null;
    } else if (i === 2) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        name: "",
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8392.jpg`,
          `/photos/IMG_8393.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    } else if (i === 4) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        name: "",
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8394.jpg`,
          `/photos/IMG_8395.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    } else if (i === 5) {
      return {
        id: `accessories-cowboy-hat-${imgNum}`,
        name: "",
        image: `/photos/IMG_${imgNum}.jpg`,
        slideImages: [
          `/photos/IMG_8396.jpg`,
          `/photos/IMG_8397.jpg`
        ],
        category: "Accessories",
        subCategory: "Cowboy Hats",
        description: "Classic cowboy hat for all ages.",
        isNew: false,
        inStock: true,
      };
    }
    return {
      id: `accessories-cowboy-hat-${imgNum}`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Accessories",
      subCategory: "Cowboy Hats",
      description: "Classic cowboy hat for all ages.",
      isNew: false,
      inStock: true,
    };
  }).filter(Boolean),
  ...[
    "IMG_8335.jpg","IMG_8338.jpg","IMG_8340.jpg","IMG_8342.jpg","IMG_8343.jpg"
  ].map((img, i) => ({
    id: `accessories-belt-${i+1}`,
    name: (i+1 >= 1 && i+1 <= 5) ? '' : `Belt Photo #${i+1}`,
    image: `/photos/${img}`,
    category: "Accessories",
    subCategory: "Belts",
    description: "High-quality leather belt.",
    isNew: false,
    inStock: true,
  })),

  // Soccer (IMG_8435 to IMG_8475)
  ...Array.from({length: 41}, (_, i) => {
    const imgNum = 8435 + i;
    if (missing.includes(imgNum) || imgNum === 8449 || imgNum === 8472) return null; // Exclude 8472
    const product: any = {
      id: `soccer-photo-${imgNum}`,
      name: imgNum === 8435 ? 'AC Milan Jersey' : imgNum === 8436 ? 'Real Madrid Jersey' : imgNum === 8438 ? 'Argentina Jersey' : imgNum === 8439 ? 'Barcelona Jersey' : imgNum === 8441 ? 'Arsenal Jersey' : imgNum === 8442 ? 'FC Porto Jersey' : imgNum === 8443 ? 'Liverpool Jersey' : imgNum === 8444 ? 'Juventus Jersey' : imgNum === 8445 ? 'PSG Paris Saint - German Jersey' : imgNum === 8446 ? 'Leon Jersey' : imgNum === 8447 ? 'Venezuela Jersey' : imgNum === 8448 ? 'Mexico Jersey with the Virgin Mary & the Aztec Calendar' : imgNum === 8450 ? 'Honduras Olimpia Jersey' : imgNum === 8452 ? 'USA Jersey' : imgNum === 8453 ? 'Club America Jersey' : imgNum === 8455 ? 'Barcelona Jersey' : imgNum === 8456 ? 'Guatemala Jersey' : imgNum === 8459 ? 'Mexico Jersey' : imgNum === 8461 ? 'Toluca Jersey' : imgNum === 8462 ? 'EL Cruz Azul Jersey' : imgNum === 8463 ? 'Colombia Jersey' : imgNum === 8464 ? 'Croatia National Jersey' : imgNum === 8465 ? 'Real Madrid Jersey' : imgNum === 8466 ? 'Pumas Jersey' : imgNum === 8467 ? 'Guatemala Jersey' : imgNum === 8468 ? 'Barcelona Jersey' : imgNum === 8469 ? 'Brazil Jersey' : imgNum === 8473 ? 'Club America Jersey' : imgNum === 8474 ? 'Club Guadalajara Jersey' : imgNum === 8475 ? 'Honduras Jersey' : `Soccer Photo #${imgNum} Jersey`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Soccer",
      subCategory: "Soccer Photos",
      description: "Soccer gear for players and fans.",
      isNew: false,
      inStock: true,
    };
    return product;
  }).filter(Boolean),

  // Shirts & Jackets > Graphic Shirts (IMG_8476 to IMG_8477, IMG_8483), only include images not in missing
  ...[8476, 8477, 8483].filter(imgNum => !missing.includes(imgNum)).map((imgNum) => ({
    id: `graphic-shirt-${imgNum}`,
    name: '',
    image: `/photos/IMG_${imgNum}.jpg`,
    category: "Shirts & Jackets",
    subCategory: "Graphic Shirts",
    description: "Trendy graphic shirt for all occasions.",
    isNew: false,
    inStock: true,
  })),
  // Shirts & Jackets > Formal Button-Up Shirts (IMG_8490 to IMG_8517), only include images not in missing
  ...Array.from({length: 28}, (_, i) => {
    const imgNum = 8490 + i;
    if (missing.includes(imgNum)) return null;
    return {
      id: `formal-shirt-${imgNum}`,
      name: (imgNum === 8490 || imgNum === 8491 || imgNum === 8494 || imgNum === 8495 || imgNum === 8501 || imgNum === 8517) ? '' : `Formal Button-Up Shirt Photo #${imgNum}`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Shirts & Jackets",
      subCategory: "Formal Button-Up Shirts",
      description: "Classic formal shirt for any event.",
      isNew: false,
      inStock: true,
    };
  }).filter(Boolean),

  // Traditional Wear > Made in Mexico (IMG_8520 to IMG_8544)
  // Religious Items > Religious Figures (IMG_8545 to IMG_8592, IMG_8596 to IMG_8612)
  // Traditional Wear > Party Wear (IMG_8621 to IMG_8672)
  // Remove missing images from all dynamic arrays
  ...(() => {
    let count = 5; // Start after the first 4 manually numbered above
    return Array.from({length: 52}, (_, i) => {
      const imgNum = 8621 + i;
      if ([8660, 8663, 8666, 8671].includes(imgNum)) return null;
      if (missing.includes(imgNum)) return null;
          // Add slideImages for Religious Wear Photo #8621
          if (imgNum === 8621) {
            return {
              id: `religious-wear-${imgNum}`,
              name: `Traditional Wear #${count++}`,
              image: `/photos/IMG_${imgNum}.jpg`,
              slideImages: [
                `/photos/IMG_8621.jpg`,
                `/photos/IMG_8624.jpg`
              ],
              category: "Traditional Wear",
              subCategory: "Religious Wear",
              description: "Elegant religious wear for ceremonies and events.",
              isNew: false,
              inStock: true,
            };
          }
      // Remove Party Wear Photo #8624
      if (imgNum === 8624) return null;
      if (count === 12) return null;
      const productNumber = parseInt((`Traditional Wear #${count}`.match(/#(\d+)/) || [])[1], 10);
      return {
        id: `party-wear-${imgNum}`,
        name: "Traditional Wear",
        image: `/photos/IMG_${imgNum}.jpg`,
        category: "Traditional Wear",
        subCategory: ([6,7,8,9,10].includes(productNumber)) ? "Traditional Dresses" : "Party Wear",
        description: ([6,7,8,9,10].includes(productNumber)) ? "Beautiful traditional dress for cultural events and celebrations." : "Elegant party wear for special occasions.",
        isNew: false,
        inStock: true,
      };
    }).filter(Boolean);
  })(),
  ...Array.from({length: 48}, (_, i) => {
    const imgNum = 8545 + i;
    if (missing.includes(imgNum)) return null;
    return {
      id: `religious-figure-${imgNum}`,
      name: (imgNum === 8545 || imgNum === 8547 || imgNum === 8549 || imgNum === 8562 || imgNum === 8567 || imgNum === 8575 || imgNum === 8576 || imgNum === 8578 || imgNum === 8581 || imgNum === 8586 || imgNum === 8587 || imgNum === 8589 || imgNum === 8592) ? '' : `Religious Figure Photo #${imgNum}`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Religious Items",
      subCategory: "Religious Figures",
      description: "Beautiful religious figure for your home.",
      isNew: false,
      inStock: true,
    };
  }).filter(Boolean),
  ...Array.from({length: 25}, (_, i) => {
    const imgNum = 8520 + i;
    if (missing.includes(imgNum)) return null;
    return {
      id: `made-in-mexico-women-${imgNum}`,
      name: `Traditional Wear #${i+1}`,
      image: `/photos/IMG_${imgNum}.jpg`,
      category: "Traditional Wear",
      subCategory: "Made in Mexico",
      description: "Authentic Mexican traditional wear.",
      isNew: false,
      inStock: true,
    };
  }).filter(Boolean),
  // ...existing code...
  // ...existing code...
].filter(
  (product) =>
    product.subCategory !== 'Adult Accessories' &&
    product.subCategory !== 'Kids Accessories'
);

export { categoryNames } from "./categories";
