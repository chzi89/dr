/*
import Image from "next/image";

export default function Home() {
  return (
    <!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dr. Amanullah | Zikiria Homeopathic Research Center</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "inverse-on-surface": "#eef1f3",
                "inverse-primary": "#a1d494",
                "on-tertiary-fixed": "#111d22",
                "background": "#f7fafc",
                "tertiary-container": "#465258",
                "surface-container-low": "#f1f4f6",
                "on-tertiary-fixed-variant": "#3c494e",
                "on-surface": "#181c1e",
                "secondary-container": "#a5c8ff",
                "inverse-surface": "#2d3133",
                "on-primary-fixed": "#002201",
                "surface-container-lowest": "#ffffff",
                "surface-variant": "#e0e3e5",
                "secondary-fixed": "#d4e3ff",
                "outline-variant": "#c2c9bb",
                "surface-bright": "#f7fafc",
                "on-tertiary-container": "#b8c5cc",
                "error": "#ba1a1a",
                "on-secondary": "#ffffff",
                "primary-container": "#2d5a27",
                "surface-dim": "#d7dadc",
                "on-error-container": "#93000a",
                "primary-fixed-dim": "#a1d494",
                "on-secondary-fixed-variant": "#204877",
                "on-error": "#ffffff",
                "surface-container-highest": "#e0e3e5",
                "surface": "#f7fafc",
                "surface-container-high": "#e5e9eb",
                "tertiary-fixed": "#d8e4eb",
                "secondary": "#3b6090",
                "primary": "#154212",
                "on-surface-variant": "#42493e",
                "primary-fixed": "#bcf0ae",
                "surface-tint": "#3b6934",
                "surface-container": "#ebeef0",
                "tertiary": "#2f3b41",
                "tertiary-fixed-dim": "#bcc8cf",
                "on-secondary-container": "#2e5484",
                "on-tertiary": "#ffffff",
                "on-primary-container": "#9dd090",
                "on-primary-fixed-variant": "#23501e",
                "on-secondary-fixed": "#001c3a",
                "on-primary": "#ffffff",
                "error-container": "#ffdad6",
                "secondary-fixed-dim": "#a5c8ff",
                "on-background": "#181c1e",
                "outline": "#72796e"
              },
              "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
              },
              "spacing": {
                "section-gap-mobile": "64px",
                "card-padding": "32px",
                "grid-gutter": "24px",
                "base": "8px",
                "container-max": "1280px",
                "section-gap-desktop": "120px"
              },
              "fontFamily": {
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "headline-md": ["Outfit"],
                "stat-number": ["Outfit"],
                "display-lg-mobile": ["Outfit"],
                "headline-sm": ["Outfit"],
                "display-lg": ["Outfit"],
                "label-caps": ["Inter"]
              },
              "fontSize": {
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "headline-md": ["30px", {"lineHeight": "1.3", "fontWeight": "500"}],
                "stat-number": ["40px", {"lineHeight": "1", "fontWeight": "700"}],
                "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
                "headline-sm": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}]
              }
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .service-card-shadow {
            shadow: 0px 4px 20px rgba(45, 90, 39, 0.05);
        }
        .service-card-shadow:hover {
            shadow: 0px 10px 30px rgba(45, 90, 39, 0.08);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 glass-nav border-b border-white/10 shadow-sm transition-all duration-300 ease-in-out">
<nav class="flex justify-between items-center max-w-container-max mx-auto px-grid-gutter py-4">
<div class="flex items-center gap-3">
<img alt="Zikiria Clinic Logo" class="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOe80FENNjzGT47QxBCtBp4vDuYuf54Q6Xy-_Y8g_7ZViyhOFelnwTLqlezev3jXN7NhRNKmvviOI67FOKxzaCVlXUtZffDP91OwI5C-89oJZp3Tv0Z2z0XKChHO145UBODMobUDSi5W9rM6a8-RCnnSj1L8SdbRXWxG11lR-zt_pn-PofGF7yhRJAKZh-a5fzyM1Q9g3iIH5YSO5B222hNur5OyKmEuJgpYjBuLVIYVFm41RpYFqI4tufSloOPp6je3nWnXsdaTkY"/>
<span class="font-headline-sm text-headline-sm font-bold text-primary">Dr. Amanullah</span>
</div>
<div class="hidden md:flex items-center gap-8 font-body-md text-body-md">
<a class="text-primary border-b-2 border-primary pb-1 font-medium transition-colors" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Treatments</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Research</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Appointments</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">FAQ</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium shadow-sm hover:translate-y-[-1px] active:translate-y-0 transition-all">
                Book Appointment
            </button>
</nav>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[85vh] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center opacity-10" data-alt="A professional medical setting with a clean, high-end minimalist aesthetic. A focused healthcare practitioner in a white lab coat consults with a patient in a bright, modern clinic filled with soft natural light and subtle green indoor plants. The atmosphere is serene, clinical, and organic, emphasizing trust and holistic healing." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEdjyy7HcU0_5gFw4M6rXUhrvRKgUiTlnVcXEfVxie-p21rxPdb8Fb6KJfI5RcrwLZ-DLIGOlLBAqy8LuDdg_TeSHMyMzy4lREs-cFcTn3Qu3NmthmC73pSf-prdZO473uwKJMViyCi34yh0K-sTfA0rMrjRZpB7YSHvhDRAdqRszj4gIQ9pyxfRfT6zFytHKXn4AJmbiXKv_fbkS2x358jr6nt2X0miMTGR128SLZGPi3oCWbjPvA02pyjCnxgdmHLzWlzRzo8cmP')"></div>
<div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
</div>
<div class="container-max mx-auto px-grid-gutter relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div class="space-y-8 max-w-2xl">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-caps text-label-caps">
<span class="material-symbols-outlined text-[14px]">verified</span>
                        ZIKIRIA HOMEOPATHIC RESEARCH CENTER
                    </div>
<h1 class="font-display-lg text-display-lg text-primary leading-tight">
                        Natural Healing Through <br/><span class="text-secondary">Evidence-Based</span> Homeopathy
                    </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        Dr. Amanullah integrates traditional homeopathic wisdom with modern clinical research to provide holistic, side-effect-free treatments for chronic and acute conditions.
                    </p>
<div class="flex flex-wrap gap-4 pt-4">
<button class="bg-primary text-on-primary px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 hover:shadow-lg transition-all group">
                            Book Appointment
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<button class="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-medium text-lg hover:bg-secondary/5 transition-colors">
                            Contact Now
                        </button>
</div>
</div>
<div class="hidden md:block relative">
<div class="aspect-square rounded-full border-[20px] border-surface-container-high overflow-hidden shadow-2xl relative">
<img class="w-full h-full object-cover" data-alt="Close-up portrait of a professional homeopathic doctor in a modern clinical environment. The lighting is soft and warm, highlighting a welcoming yet authoritative presence. In the background, blurred glass shelves hold amber medicine bottles and clinical research papers, reinforcing the bridge between nature and science." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAiRfGUqvksDOHP-f5gYhW9Iy87XxPl9MPz3sgn_Vin-CN4WGh1FhTczi3E2G4Qp6qdAW8BOeBqPbRtvP8G1QpmFjo0KYU_l-Fx5iWM3V4G2hPZ6Vir_6oEP2XM0cgA3ZbpytMa4eKHpx3QTZAaQxRU8k0ngxkWqCbqH2INiowcA9ZE7Hs2TzLb8NJm_pif_CTfUMxdRp1b0MemVFHLBvHS891wUBD0sHDbD9dz6N9AhH2XqsAhEL_IfuCSis7EIwlUcfTi6JhJFz"/>
</div>
<!-- Trust Floating Badges -->
<div class="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant">
<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
</div>
<div>
<p class="font-headline-sm text-headline-sm text-primary">BHMS & RHMS</p>
<p class="text-on-surface-variant text-sm">Certified Expert Physician</p>
</div>
</div>
</div>
</div>
</section>
<!-- Trust Badges Bar -->
<section class="bg-surface-container-lowest py-12 border-y border-outline-variant/30">
<div class="max-w-container-max mx-auto px-grid-gutter">
<div class="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">verified_user</span>
<span class="font-headline-sm text-on-surface">BHMS Certified</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">medical_services</span>
<span class="font-headline-sm text-on-surface">RHMS Certified</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
<span class="font-headline-sm text-on-surface">Patient-Focused Care</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">science</span>
<span class="font-headline-sm text-on-surface">Clinical Research</span>
</div>
</div>
</div>
</section>
<!-- Stats Section -->
<section class="py-section-gap-desktop bg-background">
<div class="max-w-container-max mx-auto px-grid-gutter">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
<div class="text-center p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors">
<p class="font-stat-number text-stat-number text-secondary mb-2">25+</p>
<p class="font-label-caps text-label-caps text-primary uppercase">Years of Experience</p>
</div>
<div class="text-center p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors">
<p class="font-stat-number text-stat-number text-secondary mb-2">15k+</p>
<p class="font-label-caps text-label-caps text-primary uppercase">Patients Served</p>
</div>
<div class="text-center p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors">
<p class="font-stat-number text-stat-number text-secondary mb-2">40+</p>
<p class="font-label-caps text-label-caps text-primary uppercase">Research Papers</p>
</div>
<div class="text-center p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors">
<p class="font-stat-number text-stat-number text-secondary mb-2">98%</p>
<p class="font-label-caps text-label-caps text-primary uppercase">Success Rate</p>
</div>
</div>
</div>
</section>
<!-- About Dr. Amanullah -->
<section class="py-section-gap-desktop relative overflow-hidden">
<div class="max-w-container-max mx-auto px-grid-gutter grid md:grid-cols-2 gap-20 items-center">
<div class="relative">
<div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img class="w-full h-full object-cover" data-alt="A portrait of Dr. Amanullah in his study, surrounded by rows of medical books and homeopathic pharmacopeia. He is wearing professional clinical attire, holding a fountain pen, looking thoughtfully into the distance. The lighting is editorial and soft, suggesting wisdom, experience, and a deep commitment to medical research." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwHn0R_TB8--q3ohHhytsuIJdBn06cH1eocrNGK_hSiMBDq4dRuGOcEyxAyT_yG-qxS86EKKHNvhipQAM711MpQ4VGc9tyj5IejKaZNYDjGwH03Nv_YWmPtoRaStLo8TU9jlk6RW7aOba27lneVC92Ft697d4sCsMO8v9WMRFlILKnn1phZ04prE8YlyVMOl8ZxKKmLFpMiIVzBUhrghmGTlBMgaPtKC7lH2zvXcwoP-SVGdnAyZE884zfqeOZZMv-QpRCf2nXbCB2"/>
</div>
<div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
</div>
<div class="space-y-8">
<div class="space-y-2">
<h2 class="font-label-caps text-label-caps text-primary uppercase tracking-widest">The Lead Physician</h2>
<h3 class="font-display-lg text-headline-md text-on-surface">Dr. Amanullah (BHMS, RHMS)</h3>
</div>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        With over two decades of dedicated practice, Dr. Amanullah has pioneered integrated homeopathic research at the Zikiria Center. His approach combines constitutional prescribing with modern diagnostic tools to treat the individual, not just the disease.
                    </p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
<h4 class="font-headline-sm text-primary mb-2">Mission</h4>
<p class="text-body-md text-on-surface-variant">To provide compassionate, scientific, and permanent healing solutions to every patient.</p>
</div>
<div class="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
<h4 class="font-headline-sm text-secondary mb-2">Vision</h4>
<p class="text-body-md text-on-surface-variant">To establish homeopathy as a primary, evidence-based choice in modern healthcare.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-section-gap-desktop bg-surface-container-low/50">
<div class="max-w-container-max mx-auto px-grid-gutter">
<div class="text-center mb-16 space-y-4">
<h2 class="font-display-lg text-display-lg text-primary">Patient Experiences</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Hear from those who have found healing and renewed vitality through our specialized treatments.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Testimonial 1 -->
<div class="bg-surface-container-lowest p-card-padding rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all">
<div class="flex gap-1 mb-4 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md italic text-on-surface-variant mb-6">"I had chronic migraine for years. After six months of constitutional treatment with Dr. Amanullah, I am completely symptom-free. The approach was so thorough and professional."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold">SM</div>
<div>
<p class="font-bold text-on-surface">Sarah Mitchell</p>
<p class="text-sm text-on-surface-variant">Chronic Migraine Patient</p>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="bg-surface-container-lowest p-card-padding rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all">
<div class="flex gap-1 mb-4 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md italic text-on-surface-variant mb-6">"The Zikiria Center is world-class. Dr. Amanullah's deep understanding of homeopathic medicine and his clinical precision are truly remarkable. Highly recommended."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">JK</div>
<div>
<p class="font-bold text-on-surface">John Khanna</p>
<p class="text-sm text-on-surface-variant">Arthritis Management</p>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="bg-surface-container-lowest p-card-padding rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all">
<div class="flex gap-1 mb-4 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md italic text-on-surface-variant mb-6">"Compassionate care at its best. They don't just treat the disease, they heal the person. My son's skin allergies vanished within three months of starting treatment."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold">AR</div>
<div>
<p class="font-bold text-on-surface">Ahmed Raza</p>
<p class="text-sm text-on-surface-variant">Pediatric Case</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-section-gap-desktop">
<div class="max-w-container-max mx-auto px-grid-gutter">
<div class="relative bg-primary-container rounded-[2rem] p-12 md:p-24 overflow-hidden">
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#ffffff_0%,_transparent_60%)]"></div>
<div class="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
<h2 class="font-display-lg text-display-lg text-on-primary-container">Ready to Start Your Journey to Wellness?</h2>
<p class="font-body-lg text-body-lg text-on-primary-container/80">Schedule your comprehensive consultation with Dr. Amanullah today and discover the power of natural healing.</p>
<div class="flex flex-wrap justify-center gap-6">
<button class="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                Book Your Appointment
                            </button>
<button class="border border-on-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                                View Research Papers
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-inverse-surface text-inverse-on-surface w-full">
<div class="flex flex-col md:flex-row justify-between items-center py-section-gap-mobile md:py-16 px-grid-gutter max-w-container-max mx-auto border-b border-white/5">
<div class="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
<div class="flex items-center gap-3">
<img alt="Zikiria Clinic Logo" class="h-8 w-8 object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOe80FENNjzGT47QxBCtBp4vDuYuf54Q6Xy-_Y8g_7ZViyhOFelnwTLqlezev3jXN7NhRNKmvviOI67FOKxzaCVlXUtZffDP91OwI5C-89oJZp3Tv0Z2z0XKChHO145UBODMobUDSi5W9rM6a8-RCnnSj1L8SdbRXWxG11lR-zt_pn-PofGF7yhRJAKZh-a5fzyM1Q9g3iIH5YSO5B222hNur5OyKmEuJgpYjBuLVIYVFm41RpYFqI4tufSloOPp6je3nWnXsdaTkY"/>
<span class="font-headline-sm text-headline-sm text-inverse-on-surface">Dr. Amanullah</span>
</div>
<p class="text-surface-variant text-sm text-center md:text-left max-w-xs">Zikiria Homeopathic Research Center. Evidence-based healing for the modern world.</p>
</div>
<div class="flex flex-wrap justify-center gap-8 font-body-md text-body-md">
<a class="text-surface-variant hover:text-primary-fixed transition-opacity" href="#">Privacy Policy</a>
<a class="text-surface-variant hover:text-primary-fixed transition-opacity" href="#">Terms of Service</a>
<a class="text-surface-variant hover:text-primary-fixed transition-opacity" href="#">Contact Us</a>
<a class="text-surface-variant hover:text-primary-fixed transition-opacity" href="#">Medical Disclaimer</a>
</div>
</div>
<div class="py-8 text-center text-sm text-surface-variant/60">
            © 2024 Dr. Amanullah Homeopathic Clinic. Evidence-based healing.
        </div>
</footer>
<!-- FAB -->
<button class="fixed bottom-8 right-8 z-40 bg-primary/80 glass-nav text-on-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-all group flex items-center gap-2">
<span class="material-symbols-outlined">event</span>
<span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">Book Appointment</span>
</button>
<script>
        // Subtle scroll animation for navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('header');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'shadow-md');
                nav.classList.remove('py-4', 'shadow-sm');
            } else {
                nav.classList.add('py-4', 'shadow-sm');
                nav.classList.remove('py-2', 'shadow-md');
            }
        });
    </script>
        </body>
      </html>
  );
}
*/

import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fcf7_0%,#eef8eb_100%)]">
      <Nav />
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8">
        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-emerald-100 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Zikiria Homeopathic Research Center
            </span>
            <h1 className="text-4xl font-bold leading-tight text-emerald-950 sm:text-5xl">
              Natural healing with a caring, evidence-based approach.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Dr. Amanullah brings together homeopathic care, patient education, and clinical research to support lasting wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/PatientPortal" className="rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Book an appointment
              </a>
              <a href="/Treatments" className="rounded-full border border-emerald-700 px-6 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50">
                Explore treatments
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-emerald-950 p-8 text-white shadow-md">
            <h2 className="text-2xl font-semibold">Why patients choose us</h2>
            <ul className="mt-6 space-y-4 text-emerald-50">
              <li>• Personalized treatment plans for chronic and acute concerns</li>
              <li>• Clear guidance from consultation through recovery</li>
              <li>• A research-led focus that respects traditional healing methods</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ["25+ years", "Clinical experience guided by compassionate care"],
            ["15k+ visits", "Patients supported through personalized care plans"],
            ["Research-led", "Evidence-informed practices at the heart of every treatment"],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
