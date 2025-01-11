src/
├── components/               # کامپوننت‌های اصلی
│   ├── reusable/             # کامپوننت‌های قابل استفاده مجدد
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   └── Button.css
│   │   ├── Table/
│   │   │   ├── Table.js
│   │   │   └── Table.css
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.js
│   │   │   └── Dropdown.css
│   │   ├── Input/
│   │   │   ├── Input.js
│   │   │   └── Input.css
│   │   ├── WeatherCard/
│   │   │   ├── WeatherCard.js
│   │   │   └── WeatherCard.css
│   │   └── index.js          # تجمیع کامپوننت‌های قابل استفاده مجدد
│   ├── weatherSpecific/      # کامپوننت‌های اختصاصی آب‌وهوا
│   │   ├── WeatherHeader.js
│   │   ├── WeatherFooter.js
│   │   └── WeatherSidebar.js
├── containers/               # مدیریت بخش‌های اصلی پروژه
│   ├── Dashboard/
│   │   ├── Components/
│   │   │   ├── Dashboard.js
│   │   │   └── CityDetails.js
│   │   ├── slice.js          # Redux Slice
│   │   ├── service.js        # سرویس‌های مرتبط با Dashboard
│   │   ├── constant.js       # مقادیر ثابت داخلی
│   │   └── index.js          # مدیریت حالت‌ها و نمایش کامپوننت‌ها
│   ├── WeatherList/
│   │   ├── Components/
│   │   │   ├── WeatherList.js
│   │   │   └── WeatherGrid.js
│   │   ├── slice.js          # Redux Slice
│   │   ├── service.js        # سرویس‌های مرتبط با WeatherList
│   │   ├── constant.js       # مقادیر ثابت داخلی
│   │   └── index.js          # مدیریت حالت‌ها و نمایش کامپوننت‌ها
│   ├── WeatherDetails/
│   │   ├── Components/
│   │   │   ├── WeatherOverview.js
│   │   │   └── WeatherHistory.js
│   │   ├── slice.js          # Redux Slice
│   │   ├── service.js        # سرویس‌های مرتبط با WeatherDetails
│   │   ├── constant.js       # مقادیر ثابت داخلی
│   │   └── index.js          # مدیریت حالت‌ها و نمایش کامپوننت‌ها
├── hooks/                    # Custom Hooks
├── styles/                   # استایل‌های متمرکز پروژه
│   ├── Dashboard.css
│   ├── WeatherList.css
│   ├── WeatherDetails.css
│   ├── variables.css
│   └── global.css
├── utils/                    # توابع و ابزارهای کمکی
├── App.js                    # کامپوننت اصلی برنامه
├── index.js                  # نقطه ورود برنامه
└── store.js                  # تنظیمات Redux Store
