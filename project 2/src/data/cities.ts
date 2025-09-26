export interface CityData {
  name: string;
  slug: string;
  description: string;
  neighborhoods: string[];
  zipCodes: string[];
}

export const cities: CityData[] = [
  {
    name: "Minneapolis",
    slug: "minneapolis",
    description: "Minneapolis, Minnesota's largest city, deserves cleaning services that match its vibrant energy and high standards. Our local team understands the unique needs of Minneapolis homes and offices, from historic neighborhoods like Northeast and Uptown to modern downtown condos and suburban areas.",
    neighborhoods: [
      "Downtown Minneapolis",
      "Northeast Minneapolis", 
      "North Loop",
      "Uptown",
      "Linden Hills",
      "Southwest Minneapolis",
      "Seward",
      "Longfellow",
      "Powderhorn",
      "Whittier"
    ],
    zipCodes: ["55401", "55402", "55403", "55404", "55405", "55406", "55407", "55408", "55409", "55410", "55411", "55412", "55413", "55414", "55415"]
  },
  {
    name: "St. Paul",
    slug: "st-paul", 
    description: "St. Paul, Minnesota's capital city, deserves exceptional cleaning services that respect its historic charm while meeting modern standards. Our experienced team provides reliable, thorough cleaning for St. Paul's diverse neighborhoods and business districts, from Cathedral Hill to Highland Park.",
    neighborhoods: [
      "Downtown St. Paul",
      "Cathedral Hill",
      "Summit Hill", 
      "Grand Avenue",
      "Highland Park",
      "Mac-Groveland",
      "Merriam Park",
      "Hamline-Midway",
      "Como Park",
      "Midway"
    ],
    zipCodes: ["55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55116", "55117"]
  },
  {
    name: "Edina",
    slug: "edina",
    description: "Edina homeowners expect the highest quality in all services, including house cleaning. Known for excellent schools and beautiful neighborhoods like Country Club District and Morningside, Edina residents value attention to detail and professional service that matches their community's high standards.",
    neighborhoods: [
      "Country Club District",
      "Morningside", 
      "Cahill Village",
      "Highlands",
      "Indian Hills",
      "Interlachen",
      "Parkwood Knolls",
      "Sunnyslope",
      "White Oaks",
      "Cornelia"
    ],
    zipCodes: ["55410", "55424", "55435", "55436"]
  },
  {
    name: "Bloomington",
    slug: "bloomington",
    description: "Bloomington families and businesses deserve reliable cleaning services that fit their busy lifestyles. Home to Mall of America and a thriving business community, Bloomington combines suburban comfort with urban convenience. Our cleaning services help busy Bloomington residents maintain beautiful homes.",
    neighborhoods: [
      "East Bloomington",
      "West Bloomington",
      "Oxboro",
      "Penn Lake", 
      "Valley View",
      "Pondview",
      "Bloomington Ferry",
      "Indian Mounds",
      "Dred Scott",
      "Hillcrest"
    ],
    zipCodes: ["55420", "55425", "55431", "55437", "55438"]
  },
  {
    name: "Maple Grove",
    slug: "maple-grove",
    description: "Maple Grove's growing community of families deserves cleaning services that keep up with their active lifestyles. One of Minnesota's fastest-growing cities, Maple Grove combines family-friendly neighborhoods with modern amenities. Our cleaning services help busy families maintain their beautiful homes.",
    neighborhoods: [
      "Central Maple Grove",
      "North Maple Grove",
      "South Maple Grove",
      "Arbor Lakes",
      "The Grove",
      "Rush Creek",
      "Fernbrook",
      "Zachary Lane",
      "Hemlock Lane",
      "Bass Lake"
    ],
    zipCodes: ["55311", "55369"]
  },
  {
    name: "Minnetonka",
    slug: "minnetonka", 
    description: "Minnetonka's lakeside community values quality and attention to detail in all services. Known for beautiful lakes, excellent schools, and upscale neighborhoods, Minnetonka residents expect premium cleaning services that meet the high standards of this prestigious community.",
    neighborhoods: [
      "Minnetonka Beach",
      "Spring Park",
      "Tonka Bay",
      "Woodland",
      "Deephaven",
      "Excelsior", 
      "Shorewood",
      "Greenwood",
      "Glen Lake",
      "Christmas Lake"
    ],
    zipCodes: ["55305", "55331", "55343", "55345", "55391"]
  }
];