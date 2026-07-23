# Cognizant Digital Nurture 5.0 - Skilling

Complete, production-ready solutions for all hands-on exercises covering **Angular (v20.0)**, **JUnit Testing (Basic & Advanced)**, and **Mockito Framework (Basic & Advanced)** as part of the Digital Nurture 5.0 .NET / Full Stack Skilling Track.

---

## 📁 Repository Directory Structure

```
Cognizant/
├── Angular_HandsOn/
│   └── LahariYeddula/
│       ├── notes.txt                             # Notes explaining key files & budget configuration
│       └── student-course-portal/                 # Complete Angular v20 Project (Hands-On 1 to 10)
│           ├── package.json
│           ├── angular.json                      # Configured with budget limits (500kb warning / 1mb error)
│           ├── tsconfig.json
│           ├── src/
│           │   ├── db.json                       # JSON Server mock database
│           │   ├── app/
│           │   │   ├── components/
│           │   │   │   ├── header/               # HeaderComponent nav bar
│           │   │   │   ├── course-card/          # CourseCardComponent (ngClass, ngStyle, @Input/@Output)
│           │   │   │   ├── course-summary/       # Shared CourseService summary widget
│           │   │   │   └── notification/         # Component-level scoped NotificationService provider
│           │   │   ├── pages/
│           │   │   │   ├── home/                 # HomeComponent (Dashboard & stats)
│           │   │   │   ├── course-list/          # CourseListComponent (*ngFor, trackBy, RxJS, NgRx)
│           │   │   │   ├── course-detail/        # CourseDetailComponent (:id route parameter)
│           │   │   │   ├── student-profile/      # StudentProfileComponent (Enrolled courses)
│           │   │   │   ├── enrollment-form/      # Template-driven form with validation
│           │   │   │   ├── reactive-enrollment/  # Reactive form (FormBuilder, FormArray, Sync/Async validators)
│           │   │   │   └── not-found/            # 404 Wildcard route component
│           │   │   ├── directives/
│           │   │   │   └── highlight.directive.ts# Configurable @HostListener directive
│           │   │   ├── pipes/
│           │   │   │   └── credit-label.pipe.ts  # PipeTransform credit formatter
│           │   │   ├── models/
│           │   │   │   └── course.model.ts       # Course & Enrollment interfaces
│           │   │   ├── services/
│           │   │   │   ├── course.service.ts     # HttpClient with RxJS map, tap, catchError, retry
│           │   │   │   ├── enrollment.service.ts # Service-to-Service Dependency Injection
│           │   │   │   ├── loading.service.ts    # Global spinner BehaviorSubject
│           │   │   │   └── notification.service.ts
│           │   │   ├── guards/
│           │   │   │   ├── auth.guard.ts         # CanActivate route guard
│           │   │   │   └── unsaved-changes.guard.ts# CanDeactivate form guard
│           │   │   ├── interceptors/
│           │   │   │   ├── auth.interceptor.ts   # Bearer token HTTP header interceptor
│           │   │   │   ├── error.interceptor.ts  # Global HTTP 401/500 error handler
│           │   │   │   └── loading.interceptor.ts# HTTP loading spinner interceptor
│           │   │   ├── store/                    # NgRx Redux state management
│           │   │   │   ├── course/               # Actions, Reducer, Selectors, Effects
│           │   │   │   └── enrollment/           # Actions, Reducer, Cross-slice Selectors
│           │   │   ├── app.routes.ts             # Application routing configuration
│           │   │   └── app.config.ts             # App providers configuration
│           │   └── ...
│           └── src/app/**/*.spec.ts              # Jasmine/Karma/TestBed Unit Specs
├── JUnit_HandsOn/
│   ├── Basic_JUnit/                              # Basic JUnit Exercises 1 to 4
│   │   ├── pom.xml
│   │   └── src/
│   └── Advanced_JUnit/                           # Advanced JUnit Exercises 1 to 5
│       ├── pom.xml
│       └── src/
├── Mockito_HandsOn/
│   ├── Basic_Mockito/                            # Basic Mockito Exercises 1 to 7
│   │   ├── pom.xml
│   │   └── src/
│   └── Advanced_Mockito/                         # Advanced Mockito Exercises 1 to 5
│       ├── pom.xml
│       └── src/
└── README.md
```

---

## 🛠️ Execution & Testing Instructions

### 1. Angular Student Course Portal (`Angular_HandsOn/LahariYeddula/student-course-portal`)

#### Install Dependencies
```bash
cd Angular_HandsOn/LahariYeddula/student-course-portal
npm install
```

#### Run Mock REST Server (JSON Server)
```bash
npm run server
# Starts API at http://localhost:3000/courses
```

#### Run Angular Dev Server
```bash
npm start
# Opens app at http://localhost:4200
```

#### Run Jasmine/Karma Unit Tests
```bash
npm test
```

---

### 2. Basic & Advanced JUnit Exercises (`JUnit_HandsOn/`)

#### Basic JUnit
```bash
cd JUnit_HandsOn/Basic_JUnit
mvn test
```

#### Advanced JUnit
```bash
cd JUnit_HandsOn/Advanced_JUnit
mvn test
```

---

### 3. Basic & Advanced Mockito Exercises (`Mockito_HandsOn/`)

#### Basic Mockito
```bash
cd Mockito_HandsOn/Basic_Mockito
mvn test
```

#### Advanced Mockito
```bash
cd Mockito_HandsOn/Advanced_Mockito
mvn test
```

---

## 🚀 How to Push to GitHub

Open Git Bash or Command Prompt in the repository folder:

```bash
cd C:\Users\DELL\.gemini\antigravity\scratch\Cognizant

# Initialize git repository
git init

# Add remote origin
git remote add origin https://github.com/LahariYeddula/Cognizant.git

# Stage all files
git add .

# Create initial commit
git commit -m "Add complete Cognizant hands-on exercise solutions for Angular, JUnit, and Mockito"

# Rename branch to main & push
git branch -M main
git push -u origin main
```
