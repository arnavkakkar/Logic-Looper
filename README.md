# Logic Looper 🧩

Logic Looper is a client-first daily logic puzzle web application designed around consistency, engagement, and clean architecture.  
The project is built in phased milestones with minimal backend dependency and scalable puzzle logic.

---

## 🚀 Project Status

### ✅ Phase 1 – Foundation (Completed)
- React application setup
- Tailwind CSS integration
- Google Authentication using Firebase
- Prisma schema setup (PostgreSQL / Neon-ready)
- IndexedDB configuration for client-side storage
- CI/CD deployment pipeline using Vercel

### ✅ Phase 2 – Core Game Engine (Completed)
- Client-side puzzle logic framework
- Daily puzzle generation using date-based seeding
- Sequence-based logic puzzle implementation
- Answer validation engine
- Basic game UI
- Local progress persistence using IndexedDB
- Puzzle locking after successful solve (daily)

---

## 🧠 How the App Works

- A new puzzle is generated daily using the current date as a deterministic seed.
- All users receive the same puzzle for a given day.
- Puzzle generation and validation run entirely on the client.
- Once solved, the puzzle is locked until the next day.
- Progress persists across refreshes and browser restarts.
- The app works offline after initial load.

---

## 🛠 Tech Stack

### Frontend
- React
- Tailwind CSS
- JavaScript (ES6+)

### Authentication
- Firebase (Google Sign-In)

### Data & Storage
- IndexedDB (client-side persistence)
- Prisma ORM (schema only)
- PostgreSQL (planned via Neon)

### Deployment
- Vercel (GitHub-integrated CI/CD)

---

## 📁 Project Structure

```
src/
 ├── engine/
 │   ├── generator.js
 │   ├── validator.js
 │   ├── storage.js
 │   └── puzzleTypes/
 │       └── sequence.js
 ├── App.js
 └── index.js
```

---

## 🎯 Design Philosophy

- Client-first architecture
- Minimal backend dependency
- Deterministic daily gameplay
- Offline-first experience
- Scalable puzzle framework

---

## 🔜 Upcoming Phases

### Phase 3 – Engagement & Retention
- Streak tracking
- Scoring system
- Hint system
- UI feedback & micro-interactions

### Phase 4 – Optimization & Polish
- Performance tuning
- Lighthouse optimization
- Code quality improvements
- Optional TypeScript migration
- Testing and reliability enhancements

---

## 🔗 Live Demo
Deployed via Vercel  
(https://logic-looper-mocha.vercel.app)

---

## 📌 Notes
- This repository currently represents Phase 1 and Phase 2 milestones.
- Backend APIs and persistent user statistics will be introduced in later phases.
- The architecture is designed to support additional puzzle types with minimal changes.
