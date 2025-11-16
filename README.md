# YC Interview Simulator

A modern, immersive Y Combinator interview practice tool with a sleek dark theme.

## About

YC Interview Simulator helps founders prepare for their Y Combinator interviews by presenting randomized questions commonly asked during YC interviews. Practice your responses under time pressure with an intuitive, distraction-free interface.

## Features

- **77 Interview Questions** - Comprehensive set of YC interview questions covering product, team, market, traction, and more
- **Timed Responses** - 20-second countdown timer with visual feedback to simulate interview pressure
- **Progress Tracking** - See how many questions you've completed
- **Pro Tips** - Helpful advice for crafting better responses
- **Keyboard Controls** - Quick navigation with Space (restart timer) and Enter (next question)
- **Modern Dark Theme** - Surkyl-branded interface with smooth animations and glassmorphism effects
- **Responsive Design** - Works on desktop and mobile devices

## Usage

1. Open `src/index.html` in your browser
2. Questions appear randomly - answer each one concisely
3. Press **Enter** to move to the next question
4. Press **Space** to restart the timer if needed
5. Timer changes color as time runs out (yellow < 10s, red < 5s)
6. Complete all questions to finish the session

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Next question |
| `Space` | Restart timer |

## Project Structure

```
src/
├── index.html                              # Main application
├── assets/
│   ├── images/
│   │   └── pg.jpg                          # Paul Graham image
│   ├── scripts/
│   │   ├── data.QYOtYxGh.js               # Question and tip data
│   │   └── functions.QYOtYxGh.js          # Application logic
│   └── styles/
│       └── style.QYOtYxGh.css             # Dark theme styling
```

## Credits

**v1.0** - Originally built by [James Cunningham](https://jamescun.com/) and [Colin Hayhurst](https://bio.link/colinhayhurst) for [GoScale's](https://goscale.com) YC S12 Interview.

**v2.0** - Enhanced by [Surkyl Labs](https://surkyl.com) with:
- Complete dark theme redesign
- Modern UI with animations and visual effects
- Circular timer with progress indicator
- Question progress tracking
- Improved typography and spacing
- Responsive design
- Code optimization and cleanup

## License

This project is open source. Please credit the original authors when forking or modifying.

---

Built with care by [Surkyl Labs](https://surkyl.com)
