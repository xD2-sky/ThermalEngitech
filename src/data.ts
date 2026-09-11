/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const PRODUCTS: Product[] = [
  // ================= STEAM BOILERS =================
  {
    id: 'oil-gas-3pass-wetback',
    category: 'Steam Boilers',
    name: 'Oil / Gas Fired 3-Pass Fully Wet Back Steam Boiler',
    tagline: 'High Efficiency Combustion & Zero Rear Refractory Maintenance',
    description: 'An industry standard for clean process steam. Features a fully submerged wet-back turnaround chamber configuration to completely avoid dry-back thermal stresses and combustion bypass. Offers premium fuel economy and high dry steam fraction.',
    features: [
      'Maximum heat transfer via extensive three-pass convective tubes',
      'Integrated corrugated Morrison furnace to absorb severe stress expansions',
      'Compatible with leading imported burners (Riello, Oilon, Bentley)',
      'High insulation efficiency with pre-fitted 100mm high-density mineral wool'
    ],
    specifications: [
      { label: 'Capacity Range', value: '1.0 Ton/hr to 30.0 Tons/hr (1000 to 30000 kg/hr)' },
      { label: 'Operating Pressures', value: '10.5 kg/cm², 17.5 kg/cm², up to 28.0 kg/cm²' },
      { label: 'Compatible Fuels', value: 'Light Diesel Oil (LDO), HSD, Natural Gas, LPG, Furnace Oil' },
      { label: 'Thermal Efficiency', value: '88% (Up to 94% with external economizer & preheater)' },
      { label: 'Compliance Code', value: 'IBR 1950 Rules (Form VI) & ASME Sec I' }
    ],
    imageType: 'boiler'
  },
  {
    id: 'solid-fuel-3pass-wetback',
    category: 'Steam Boilers',
    name: 'Solid Fuel Fired 3-Pass Fully Wet Back Steam Boiler',
    tagline: 'High Grate Area for Coal, Wood & Biomass Waste Fuels',
    description: 'A robustly constructed three-pass wetback shell steam boiler customized for optimal solid fuel firing. Engineered with a large furnace grate area, balanced mechanical draft, and heavy-gauge boiler tubes to handle ash-prone solid combustion without fouling.',
    features: [
      'Specially designed stationery or bubbling fluidized bed fuel grates',
      'Generous freeboard height ensures complete thermal burnout of volatile organic matters',
      'Dual-drum or large single shell steam space ensures steady steam release without pressure drop',
      'Equipped with heavy soot blowers for easy inline tube cleaning'
    ],
    specifications: [
      { label: 'Capacity Range', value: '1.0 Ton/hr to 15.0 Tons/hr' },
      { label: 'Operating Pressures', value: '10.5 kg/cm², 17.5 kg/cm², or 21.0 kg/cm²' },
      { label: 'Fuels Supported', value: 'Steam Coal, Fire Wood Logs, Agro-Residue Briquettes, Rice Husk, Lignite' },
      { label: 'Thermal Efficiency', value: 'Up to 84% with Multi-cyclone and Heat Recuperation' },
      { label: 'Safety Accessories', value: 'Dual Mobrey water level controllers, twin spring safety valves' }
    ],
    imageType: 'boiler'
  },
  {
    id: 'hybrid-combithermal',
    category: 'Steam Boilers',
    name: 'Hybrid Multi Fuel Fired Combi-Thermal Type Boiler',
    tagline: 'Unique Combination of Water-Tube Radiation & Smoke-Tube Convection',
    description: 'The ultimate versatile hybrid design. Combines water wall pipes surrounding the main radiation furnace with a classical smoke-tube shell. This hybrid configuration yields rapid steam generation rates, tremendous thermal storage buffer, and high tolerance to load fluctuations.',
    features: [
      'Saves footprint while boasting double the water-holding capacity of pure water tube boilers',
      'Externally located membrane water walls maximize radiation heat absorption',
      'Low furnace heat release rate prevents ash fusion and tube clinkering',
      'Adapts flawlessly from cheap agricultural biomass briquettes to high-grade coal'
    ],
    specifications: [
      { label: 'Capacity Range', value: '2.0 Tons/hr to 20.0 Tons/hr' },
      { label: 'Working Pressures', value: '10.5 to 25.0 kg/cm² configurations' },
      { label: 'Fuel Adaptability', value: 'Coal, Biomass Briquettes, Wood, Husk, Mustard Straw, Petcoke' },
      { label: 'Performance Rank', value: 'Highly recommended for heavy dyeing & washing chemical plants' },
      { label: 'Automation Level', value: 'Semi-automatic pneumatic fuel feeding or automated screw assembly' }
    ],
    imageType: 'boiler'
  },
  {
    id: 'smokecum-watertube-membrane',
    category: 'Steam Boilers',
    name: 'Multi Fuel Fired Smoke Cum Water Tube (Water Membrane) Type Boiler',
    tagline: 'Extreme High Pressure and Rapid Thermal Response',
    description: 'Designed for plants requiring continuous, uninterrupted heavy steam volumes at highly elevated pressures. Utilizes an advanced premium membrane water wall furnace. Rapidly transfers intense combustion heat through fluid circulating membrane tubes, followed by high-convective smoke tubes.',
    features: [
      'Membrane wall design minimizes thermal leakage and completely eliminates refractory brickwork',
      'Extremely safe and stable water circulation pattern via robust downcomer pipe lines',
      'Accommodates customized automatic reciprocating grate systems',
      'Guarantees high fuel energy recovery using a high-density convective passage design'
    ],
    specifications: [
      { label: 'Capacity Range', value: '4.0 Tons/hr to 25.0 Tons/hr' },
      { label: 'Operating Pressures', value: '17.5 kg/cm², 24.5 kg/cm², up to 32.0 kg/cm²' },
      { label: 'Fuels Supported', value: 'Imported/Indian Coal, Agro Briquettes, Husk, Biomass Waste, Wood chips' },
      { label: 'Boiler Metallurgy', value: 'High grade seamless carbon steel tubes to ASTM A210 Gr. A1' },
      { label: 'System Accessories', value: 'Pneumatic ash handling, bag filter unit compatibility' }
    ],
    imageType: 'boiler'
  },

  // ================= THERMIC FLUID HEATERS =================
  {
    id: 'oil-gas-3pass-horizontal-heater',
    category: 'Thermic Fluid Heaters',
    name: 'Oil / Gas Fired 3-Pass Horizontal Thermic Fluid Heater',
    tagline: 'High Velocity Concentric Double Coil Circulation up to 300°C',
    description: 'Configured for high temperature, low-pressure thermal transfer systems. Relies on double concentric helical coils through which clean thermic fluid is pumped at high velocities. Ensures optimum heat flux distribution to completely prevent localized hot spots and thermal fluid cracking.',
    features: [
      'Horizontal robust layout facilitates quick internal coil inspection and flame alignment',
      'Forced circulation configuration monitored by sensitive differential flow safety switches',
      'High-velocity fluid flow design (greater than 2.0 m/s) prevents pipe degradation',
      'Saves high-pressure construction costs compared to high-pressure steam boilers'
    ],
    specifications: [
      { label: 'Thermal Output', value: '1,00,000 kcal/hr to 40,00,000 kcal/hr' },
      { label: 'Max Operating Temp', value: 'Up to 300°C (Special organic oils up to 320°C)' },
      { label: 'Draft Configuration', value: 'Forced draft clean-air burner loop' },
      { label: 'Oil Circulation Code', value: 'Strictly aligned to DIN 4754 design norms' },
      { label: 'Controls', value: 'Microprocessor based burner controllers with high temperature trip switches' }
    ],
    imageType: 'heater'
  },
  {
    id: 'solid-fuel-3pass-horizontal-heater',
    category: 'Thermic Fluid Heaters',
    name: 'Wood/Coal Fired 3-Pass Horizontal Thermic Fluid Heater',
    tagline: 'Robust Multi-Coil Design with Fuel Economy Recup Block',
    description: 'An eco-friendly and highly economical process heating system utilizing firewood or charcoal briquettes. Constructed using heavy-duty seamless coils and a spacious combustion chamber to maximize radiant transfer, reducing operational heating expenditure by up to 50% compared to oil heating.',
    features: [
      'Inhouse fabricated thick-walled seamless coiled tubes to ASTM A106 Gr. B specifications',
      'Spacious furnace box provides optimal fuel residence time and clean flue pathing',
      'Fitted with dual high-discharge primary thermic fluid circulating pumps',
      'Includes air pre-heater to return hot exit exhaust air back into combustion stack'
    ],
    specifications: [
      { label: 'Heat Capacity', value: '2,00,000 kcal/hr to 30,00,000 kcal/hr' },
      { label: 'Maximum Temperatures', value: '280°C to 300°C' },
      { label: 'Solid Fuel Options', value: 'Wood logs, Steam Coal, Dry Biomass Briquettes, Coconut shell' },
      { label: 'Draft Assembly', value: 'Balanced draft (Both primary FD Fan & robust ID blower)' },
      { label: 'Structure Sizing', value: 'Horizontal skidded setup with easy ash cleanout ports' }
    ],
    imageType: 'heater'
  },
  {
    id: 'solid-fuel-4pass-vertical-heater',
    category: 'Thermic Fluid Heaters',
    name: 'Wood/Coal Fired 4-Pass Vertical Thermic Fluid Heater',
    tagline: 'Four-Pass Space Saving High-Thermal Exchange Matrix',
    description: 'Engineered for plants with highly restricted ground plot footprints. This vertically erected thermic fluid heater drives flue gases through four discrete internal passes. Dramatically extends thermal contact path resulting in extreme fuel heat absorption and very low flue gas chimney temperatures.',
    features: [
      'Space-saving vertical tower design consumes less than half the floor space of horizontal models',
      'Highly innovative 4-pass flow design secures maximum temperature pickup across the coil coilings',
      'Built-in soot-dropping hopper base prevents particulate ash buildup inside internal passes',
      'Equipped with advanced alarm panels indicating fluid expansion drum level limits'
    ],
    specifications: [
      { label: 'Thermic Output', value: '1,50,000 kcal/hr to 25,00,000 kcal/hr' },
      { label: 'Working Temperature', value: 'Normal process heating up to 280°C' },
      { label: 'Fluid Pressure Rating', value: 'Testing rating 10.0 kg/cm²; operational rating 4.5 kg/cm²' },
      { label: 'Exhaust Passage', value: 'Highly efficient 4-pass convective exhaust matrix' },
      { label: 'Safety Overrides', value: 'Fluid flow sensor, low oil level interlocks, digital PID temperature controllers' }
    ],
    imageType: 'heater'
  },

  // ================= PRESSURE REDUCING STATIONS =================
  {
    id: 'pressure-reducing-station',
    category: 'Pressure Reducing Stations',
    name: 'Pressure Reducing Station (PRS)',
    tagline: 'Custom Skid-Mounted Pressure Regulation & Moisture Separation',
    description: 'Pre-assembled, performance tested, and fully isolated steam regulating skids. Drastically scale down fluctuating source boiler steam pressures to steady, low-pressure process lines. Ensures stable steam volumes and optimal quality without process interruptions.',
    features: [
      'Fitted with high-accuracy Self-Actuated or Pneumatic control valves',
      'Standard incorporating moisture separator to extract wet steam and supply 100% dry steam fraction',
      'Includes premium Class IV and Class VI shutoff valves with bellows seals',
      'Highly structural, vibration-resistant powder-coated skid layout base'
    ],
    specifications: [
      { label: 'Inlet Tube Size', value: 'DN15 up to DN250 robust flange connections' },
      { label: 'Design Inlet Pressure', value: 'Up to 32.0 kg/cm² high pressure inputs' },
      { label: 'Controlled Outlet Press', value: '0.5 kg/cm² to 8.5 kg/cm² (Custom regulated)' },
      { label: 'Materials Used', value: 'ASTM A216 WCB Cast Carbon Steel with Stainless steel trim' },
      { label: 'Design Codes', value: 'ANSI B16.34 & IBR statutory compliance' }
    ],
    imageType: 'prs'
  },

  // ================= AIR PRE HEATERS =================
  {
    id: 'air-pre-heater',
    category: 'Air Pre Heaters',
    name: 'Air Pre Heater (APH) & Economizer Block',
    tagline: 'Utilize Waste Chimney Gas Heat to Boost Overall Efficiency by 5-8%',
    description: 'Highly efficient shell and tube style heat recovery units designed to harness hot exhaust flue gases leaving the boiler or thermic fluid heater. Uses this wasted thermal energy to preheat incoming combustion air or boiler feed water, significantly reducing overall plant fuel consumption.',
    features: [
      'Significantly lowers exhaust chimney gases down to safe dew-point thresholds',
      'Manufactured using heavy-wall erosion-resistant seamless steel conduits',
      'Equipped with quick-opening cleanout doors for swift fly-ash soot scraping',
      'Optimizes burner fuel combustion stability by supplying hot intake draft air'
    ],
    specifications: [
      { label: 'Energy Recovery Scale', value: 'Increases thermal system efficiency by 4% to 8%' },
      { label: 'Tube Material Slabs', value: 'Corrosion resistant Corten Steel or ASME Carbon Steel' },
      { label: 'Flue Temp Drop Margin', value: 'Reduces exhaust temperature by 60°C to 110°C' },
      { label: 'Layout Design', value: 'Available in single pass or compact multi-pass blocks' },
      { label: 'Gaskets used', value: 'High density ceramic fiber seal ropes to stop exhaust bypass' }
    ],
    imageType: 'preheater'
  },

  // ================= HEAT EXCHANGERS =================
  {
    id: 'heat-exchanger-shelltube',
    category: 'Heat Exchangers',
    name: 'Heat Exchangers (Shell & Tube Type)',
    tagline: 'TEMA Class Fluid Heat Transfer & Dynamic Condensers',
    description: 'Custom engineered and meticulously simulated heat exchanger units. Designed to handle liquid-to-liquid, vapor-to-liquid, and steam condensing applications. High-precision tube-to-tubesheet expansion and dynamic flow baffles ensure maximized heat transfer co-efficiencies.',
    features: [
      'Engineered strictly matching world-wide TEMA standard guidelines',
      'Available with plain, corrugated, or highly efficient inner finned tubes',
      'Strict quality checks with dye-penetration (DP) and hydraulic tube-sheet testing',
      'Custom removable tube bundles allow convenient scale descaling'
    ],
    specifications: [
      { label: 'Heat Surface Area', value: '2.0 m² up to 600.0 m² custom size slabs' },
      { label: 'Operation Pressure Limit', value: 'Full vacuum up to 45.0 kg/cm² rating' },
      { label: 'Core Material Options', value: 'SS304/SS316L, Copper, Cupro-Nickel, Carbon Steel ASTM A179' },
      { label: 'Design Standard Rules', value: 'ASME Section VIII Div 1 & TEMA Mechanical guidelines' },
      { label: 'Primary Use Case', value: 'Chemical reactors, chiller plants, LDO heaters, oil cooling loops' }
    ],
    imageType: 'exchanger'
  },

  // ================= HOT WATER GENERATORS =================
  {
    id: 'hot-water-generator-unit',
    category: 'Hot Water Generators',
    name: 'Hot Water Generator',
    tagline: 'Highly Compact Package Instant Hot Water System',
    description: 'Industrial package skid units supplying continuous hot water streams. Utilizes forced-circulation monobloc loops with automated single-button controls. Non-pressurized design removes the legal need for dedicated boiler operators or statutory local inspections.',
    features: [
      'Extremely quick startup - reaches operating temperatures in under 4 minutes',
      'Rust-proof interior construction using SS304 or food-grade SS316L materials',
      'Integrates seamlessly with existing plant recirculation loops',
      'Incorporates highly responsive flame sensors and digital safety controllers'
    ],
    specifications: [
      { label: 'Capacity Range', value: '50,000 kcal/hr to 25,00,000 kcal/hr' },
      { label: 'Water Temp Limit', value: 'Standard up to 90°C (Pressurized systems up to 130°C)' },
      { label: 'Primary Fueled Fuels', value: 'Light Diesel Oil, HSD, Natural Gas, LPG' },
      { label: 'Water Flow rate', value: '1,500 Liters/hr to 45,000 Liters/hr' },
      { label: 'Statutory Obligation', value: 'Highly advantageous; completely exempted from IBR Boiler regulations' }
    ],
    imageType: 'generator'
  },

  // ================= POLLUTION CONTROL EQUIPMENTS =================
  {
    id: 'multi-cyclone-dust-collector',
    category: 'Pollution Control Equipments',
    name: 'Multi Cyclone Dust Collector',
    tagline: 'High-Efficiency Centrifugal Particulate Separation Block',
    description: 'An essential pre-cleaning device for solid fuel boilers. Relies on centrifugal forces developed within multiple small swirl cyclone cones to separate fly-ash and charcoal particles from exhaust stack flue gases before venting.',
    features: [
      'Consists of multiple high-durability Grade cast iron swirl vane cones',
      'Removes up to 85% of coarse particles, reducing wear-tear on downstream wet scrubbers',
      'Completely passive structure with zero moving mechanical components to wear out',
      'Equipped with airtight rotary air-lock valve to ensure zero air bypass'
    ],
    specifications: [
      { label: 'Collection Efficiency', value: 'Up to 85% for particles larger than 15 microns' },
      { label: 'Vane Cone Material', value: 'Abrasive-resistant alloy Cast Iron (Chilled CI)' },
      { label: 'Operational Draft Drop', value: 'Slight gas friction pressure drop of 40-75 mm WC' },
      { label: 'Exhaust Flow Capacity', value: '1,500 M³/hr to 45,000 M³/hr' },
      { label: 'Base Mounting Support', value: 'Heavy channel steel structure with ash drop bin' }
    ],
    imageType: 'pollution'
  },
  {
    id: 'bag-filter-pollution',
    category: 'Pollution Control Equipments',
    name: 'Bag Filter System',
    tagline: 'Pulse-Jet Fabric Filtration to Secure Clean Chimney Discharge',
    description: 'The pinnacle of dry pollution control systems. Drives fly ash laden chimney exhaust gases through premium grade high-density filtration bags. Periodically blasts dry pressurized air backwards into the bags (Pulse-Jet) to shed ash cake, holding chimney exit dust density cleanly below 50 mg/Nm³.',
    features: [
      'Secures complete particulate containment matching strict local GPCB guidelines',
      'Utilizes premium temperature-stable Nomex or Ryton filter media bag structures',
      'Fully electronic digital sequential pulse-timer manages purging automatically',
      'Easy snap-ring bag installation makes preventative updates quick and hassle-free'
    ],
    specifications: [
      { label: 'Effective Cleanliness', value: 'Guarantees outlet PM emissions below 50 mg/Nm³' },
      { label: 'Cleaning Principle', value: 'Online automatic high-pressure Pulse-Jet air injection' },
      { label: 'Operating Temp Limits', value: 'Normal up to 150°C; heat-treated media bags up to 200°C' },
      { label: 'Air-to-Cloth Ratio', value: 'Optimized at 1.0 to 1.3 m/min' },
      { label: 'Shedding Valve', value: 'Includes automated heavy rotary valve dust discharging' }
    ],
    imageType: 'pollution'
  },
  {
    id: 'wet-scrubber-pollution',
    category: 'Pollution Control Equipments',
    name: 'Wet Scrubber System',
    tagline: 'Vortex Style Water Spray Particulate Scrubber',
    description: 'An active wet-sprayed pollution containment system. Uses high-pressure mist nozzles inside a scrubbing tower to wash out fine fly-ash, soot particles, and acidic flue gas molecules (like SOx) in a water slurry, ensuring pristine dust-free chimney emissions.',
    features: [
      'Inhouse fabricated using acid/alkali-resistant SS304 or heavy FRP coatings',
      'Configured with high-surface-area polypropylene pall-rings packing beds',
      'Fitted with dual-stage moisture eliminator to prevent plume water carrying',
      'Reuses internal scrubbing water via simple concrete settling tank loops'
    ],
    specifications: [
      { label: 'Scrubbed PM Removal', value: 'Achieves massive 95% fine particle containment' },
      { label: 'Scrubbing Liquid Flow', value: '2.5 to 5.0 Liters of water per M³ of gas volume' },
      { label: 'Internals Layout', value: 'Full coverage spiraled hollow-cone mist nozzles' },
      { label: 'Corrosion Rating', value: 'Guaranteed chemically inert against sulfur dioxide gas' },
      { label: 'Structure Type', value: 'Compact cylindrical tower with integrated gas mist separators' }
    ],
    imageType: 'pollution'
  },
  {
    id: 'chimney-pollution',
    category: 'Pollution Control Equipments',
    name: 'Industrial Chimney Stack',
    tagline: 'Self-Supporting & Guy-Roped Structural Flue Steel Stacks',
    description: 'Precision engineered industrial discharge stacks built in strict compliance with Central Pollution Control Board (CPCB) guidelines. Features internal acid-resistant paint, professional aviation warning lights, clean emission monitoring ports, and climbing ladders.',
    features: [
      'Offered in self-supporting rigid designs or cost-effective guy-roped formats',
      'Inbuilt sampling port nozzle with secure platform for regulatory emission scanning',
      'Coated externally with durable temperature-stable zinc silicate primers',
      'Includes grounding copper strips to protect structural joints from lightning strikes'
    ],
    specifications: [
      { label: 'Standard Height Range', value: '30.0 Meters (approx. 100 feet) to 45.0 Meters' },
      { label: 'Construction Shells', value: 'Mild Steel IS 2062 heavy structural sheets' },
      { label: 'Regulatory Feature', value: 'Pre-fitted CPCB compliant gas sampling nozzle' },
      { label: 'Access Assembly', value: 'Heavy cage safety ladder with handrails up to the top' },
      { label: 'Internal lining', value: 'Corrosion resistant high build bitumastic or epoxy coat' }
    ],
    imageType: 'pollution'
  },

  // ================= OTHER EQUIPMENTS =================
  {
    id: 'steam-distribution-header',
    category: 'Other Equipments',
    name: 'Steam Distribution Header',
    tagline: 'Heavy-Wall Main Header manifolds to Split Plant Steam Safely',
    description: 'A critical pressure manifold designed to divide primary bulk steam leaving steam boilers into discrete plant processing zone lines. Heavy-gauge steel shells handle high volumetric steam distributions while ensuring proper pressure stabilization.',
    features: [
      'Fabricated solely from thick-walled seamless pipes (ASTM A106 Grade B)',
      'Weld nozzles are reinforced to prevent physical stress fractures at higher velocities',
      'Features deep bottom drain pockets to instantly extract condensates',
      'Equipped with pressure gauge nozzles for real-time monitoring of downstream branches'
    ],
    specifications: [
      { label: 'Manifold Shell Diaz', value: '150mm up to 600mm heavy-walled pipes' },
      { label: 'Operating Temp limits', value: 'Steam saturated conditions up to 240°C' },
      { label: 'IBR Registration', value: 'Full statutory registration with custom drawings certified by local inspector' },
      { label: 'Flange Slabs', value: 'ANSI Class 150# or Class 300# slip-on steel flanges' },
      { label: 'Hydrostatic Test Rating', value: 'Sustains full 30.0 kg/cm² hydrostatic pressure' }
    ],
    imageType: 'other'
  },
  {
    id: 'condensate-tank',
    category: 'Other Equipments',
    name: 'Condensate Flash Tank / Receiver Unit',
    tagline: 'Maximize Plant Heat Economy by Capturing Saturated Return Water',
    description: 'A specialized receiver vessel designed to collect hot condensed water returning from processes. Separates low-pressure flash steam (which can be recycled) from pure hot liquid, which is fed back into the boiler, yielding tremendous fuel and water conservation.',
    features: [
      'Dramatically reduces energy expenses by capturing hot condensate return water',
      'Vertical space-saving design with smooth internal kinetic flash deflection plates',
      'Includes optical heavy-gauge level glass indicators to visually map liquid depth',
      'Built with heavy structural channel frame ready for easy site floor bolting'
    ],
    specifications: [
      { label: 'Volume Capacity', value: '500 Liters to 15,000 Liters volume rating' },
      { label: 'Construction Slabs', value: 'Stainless Steel Gr 304 or robust Boiler Steel SA 516 Gr. 70' },
      { label: 'Thermal Benefit', value: 'Recovers pure mineral-free hot feed water at up to 95°C' },
      { label: 'Nozzles Layout', value: 'Condensate inlet, flash steam vent, water dump drain, pump ports' },
      { label: 'Design Codes', value: 'ASME Sec VIII Div 1 & state-level regulations' }
    ],
    imageType: 'other'
  },
  {
    id: 'steam-boiler-feed-water-tank',
    category: 'Other Equipments',
    name: 'Steam Boiler Feed Water Tank / Deaerator',
    tagline: 'Corrosion Prevention Feed Water storage System',
    description: 'A spacious storage reservoir designed to hold raw and soft makeup water before pumping into boilers. Features pre-heating steam injection coils to drive out dissolved oxygen and carbon dioxide, completely preventing destructive pitting corrosion on costly internal boiler tubes.',
    features: [
      'Integrated physical oxygen stripping system via direct sparge steam heating',
      'Available with chemical dosing tube connections to feed oxygen-scavenging soda ash',
      'Double-epoxy internal barrier lining guarantees total structural protection',
      'Equipped with sensitive level float controllers to automatically manage soft water makeup'
    ],
    specifications: [
      { label: 'Water Vol Capacity', value: '1,000 Liters to 20,000 Liters storage' },
      { label: 'Water Temp Boost', value: 'Maintains feed water at optimized 85°C to 90°C' },
      { label: 'Vessel Metallurgy', value: 'ASTM A36 Boiler Steel or Stainless Steel 304' },
      { label: 'Gauging indicators', value: 'External visual reflex level glass with guard rods' },
      { label: 'Accessories', value: 'Vent valves, vacuum breakers, temperature gauge bulb' }
    ],
    imageType: 'other'
  },
  {
    id: 'expansion-tank',
    category: 'Other Equipments',
    name: 'Expansion Cum De-Aerator Tank',
    tagline: 'Vital Safety Header for Closed-Loop Thermic Fluid Systems',
    description: 'An indispensable safety reservoir module installed at the highest point of thermic fluid heating systems. Accommodates the physical expansion of thermic fluid as its temperature expands from ambient up to 300°C, and vents steam/air pockets, preventing system cavitation and pump locking.',
    features: [
      'Accommodates volumetric liquid bulk expansions up to 30% without spilling',
      'Nitrogen sealing arrangement nozzle included to prevent hot oil oxidation',
      'Constructed with sturdy internal splash plate panels',
      'Provides safe atmospheric cold seal buffer for the circulating pump loop'
    ],
    specifications: [
      { label: 'Sizing Volumes', value: '250 Liters to 5,000 Liters volumetric dimensions' },
      { label: 'Mounting Level', value: 'Erected on high structural columns at least 3m above highest process' },
      { label: 'Liquid Level Indicators', value: 'High visibility magnetic level indicator or multi-glass gauge' },
      { label: 'Inert Gas Port', value: 'Pre-fitted regulator nozzle for Nitrogen (N2) blanketing' },
      { label: 'Vessel Shell Code', value: 'Built and tested to sustain 4.0 kg/cm² pressure' }
    ],
    imageType: 'other'
  }
];

export const INDUSTRIES = [
  {
    name: 'Chemical & Petrochemical',
    useCase: 'Distillation heating, high-pressure reaction vessels, and bulk dry air reactors.',
    solution: 'Thermic Fluid Heaters & Heat Exchangers'
  },
  {
    name: 'Textiles & Dyeing',
    useCase: 'Sizing cylinders, high-volume batch heating, and drying chamber operations.',
    solution: '3-Pass Wetback Steam Boilers & Heat Exchangers'
  },
  {
    name: 'Food & Beverage Processing',
    useCase: 'CIP sanitization, flash pasteurization, steam jacketed cooking vessels, and laundry dryers.',
    solution: 'Oil/Gas Fired Steam Boilers & Hot Water Generators'
  },
  {
    name: 'Pharmaceutical & Cleanroom',
    useCase: 'Pure steam creation for sterilization autoclaves and soot-free indirect room hot air.',
    solution: 'Stainless Steel Hot Water systems & Indirect Air Gen'
  },
  {
    name: 'Refineries & Oil Storage',
    useCase: 'Tank farm heavy petroleum viscosity reduction, asphalt heating, and line tracing.',
    solution: 'High-Capacity Horizontal Solid Fuel & Gas Coil Heaters'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Indian Boiler Regulations (IBR 1950)',
    description: 'Approved boiler and pressure vessel manufacturing facility, certified to build, weld, and heat-treat IBR boilers with Latest Amendments, backed by Form VI compliance certificates.',
    authority: 'Directorate of Boilers, India'
  },
  {
    title: 'ASME Section VIII Division 1 & 2',
    description: 'Design and fabrication of pressure vessels and boiler components to ASME Boiler & Pressure Vessel Code, alongside IS-2825 for unfired pressure vessels.',
    authority: 'American Society of Mechanical Engineers'
  },
  {
    title: 'ISO 9001:2015 Quality Management',
    description: 'Quality management systems covering every stage from raw structural steel receipt through volumetric testing and delivery.',
    authority: 'ISO 9001:2015 Standard'
  },
  {
    title: 'Design Codes for Pressure Parts & Heat Exchangers',
    description: 'Combustion equipment, pressure part, and heat exchanger design referenced against ISO-R-831, BS-2970, and TEMA standards.',
    authority: 'International Design Standards'
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: '01',
    title: 'Raw Material Testing & UT',
    description: 'Every plate of ASTM boilers grade steel undergoes complete ultrasonic thickness inspections to verify lack of internal micro-fissures.'
  },
  {
    step: '02',
    title: 'Precision Plate Rolling & Plasma Cutting',
    description: 'Automatic heavy plate rolling machines build high-circularity pressure shells. Plasma cutting holds geometric tolerances to within 0.5mm.'
  },
  {
    step: '03',
    title: 'Radiography WELDS & ASME GTAW/SMAW',
    description: 'Welders are certified under ASME Section IX standards. Joints are subjected to volumetric X-ray inspections to guarantee 100% weld joint efficiency.'
  },
  {
    step: '04',
    title: 'Tube Bundle Hydrostatic Saturated testing',
    description: 'Completed coils and tube sheets are stress-tested at 1.5x design pressure to confirm complete pressure containment integrity.'
  },
  {
    step: '05',
    title: 'Refractory Lining & Thermal Insulation',
    description: 'Premium ceramic fiber blankets and high-alumina castable refractories minimize outer shell heat loss to room surroundings.'
  },
  {
    step: '06',
    title: 'Final Commissioning & PLC Integration',
    description: 'Pre-firing simulation checks burner fuel-air gas mixing metrics and audits alarm safety configurations before shipping.'
  }
];

// Real shop-floor equipment specifications, sourced from the facility's own
// documented infrastructure — not generic filler copy.
export const SHOP_CAPABILITIES = [
  {
    label: 'Welding',
    value: 'MIG/TIG/ERW welding processes. Rectifiers rated 400 Amps. Argon Arc welding set with suppressor (TIG). CO2 welding set, 600 Amps.'
  },
  {
    label: 'Plate Bending',
    value: 'Pyramid-type plate bending machine. Minimum diameter 700mm. Length up to 2500mm. Thickness up to 32mm, in-house.'
  },
  {
    label: 'Cutting',
    value: 'Mechanically operated shearing up to 6mm. Power-operated hacksaw. Flame cutting up to 150mm thickness. CNC plasma profile cutting.'
  },
  {
    label: 'Tube Bending',
    value: 'Job length up to 2m, job size up to 500mm diameter. Bend saw for angle & channel sections up to 12mm thick. Carbon arc gouging, abrasive cutting.'
  },
  {
    label: 'Material Handling',
    value: 'Shop equipped with electrically operated overhead crane, plus a pneumatic testing machine rated up to 100 PSI.'
  },
  {
    label: 'Surface Finish & Painting',
    value: 'Sand blasting and spray painting. 3-phase power connection with 160 KVA / 415V diesel generator backup for power failure.'
  }
];

// Engineering & design capabilities
export const DESIGN_CAPABILITIES = {
  equipmentDesign: [
    'Thermal design',
    'Pressure part design',
    'Combustion equipment design — coal firing, gas & oil firing, agro-waste fuel firing',
    'Welding joints design',
    'Stress analysis'
  ],
  auxiliaries: [
    'Structural & ducting',
    'Instrumentation',
    'Pneumatic, electro-mechanical, electronic, electrical, process & utility pipeline'
  ],
  cadTools: ['AutoCAD', 'Thermal design software', 'Stress calculations & CAD drafting', 'ProE / CREO', 'STAAD analysis']
};

// Design codes and standards actually referenced in engineering — not aspirational claims.
export const DESIGN_CODES = [
  { code: 'ASME Sec. VIII Div. 1 & 2', note: 'Pressure vessel design' },
  { code: 'IS-2825', note: 'Unfired pressure vessels' },
  { code: 'IBR 1950, with Latest Amendments', note: 'Indian Boiler Regulations' },
  { code: 'ISO-R-831', note: 'Boiler design recommendations' },
  { code: 'BS-2970', note: 'Steel tubes for boilers' },
  { code: 'TEMA', note: 'Heat exchanger standards' }
];
