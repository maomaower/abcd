from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI(title="Tech News API")

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev purposes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MOCK_NEWS = [
    {
        "id": 1,
        "title": "Quantum Computing Reaches New Milestone",
        "excerpt": "Researchers have successfully demonstrated a 1000-qubit processor, opening doors to new simulations.",
        "source": "TechCrunch",
        "date": datetime.now().isoformat(),
        "imageUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
        "category": "Quantum"
    },
    {
        "id": 2,
        "title": "The Rise of Agentic AI",
        "excerpt": "New autonomous agents are taking over complex workflows previously thought impossible to automate.",
        "source": "Wired",
        "date": datetime.now().isoformat(),
        "imageUrl": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        "category": "AI"
    },
    {
        "id": 3,
        "title": "Next-Gen Solid State Batteries Unveiled",
        "excerpt": "A major automotive company reveals batteries with 2x energy density, promising 1000-mile EV range.",
        "source": "The Verge",
        "date": datetime.now().isoformat(),
        "imageUrl": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600",
        "category": "Hardware"
    }
]

MOCK_TRENDS = [
    {"rank": 1, "topic": "Agentic AI workflows"},
    {"rank": 2, "topic": "Quantum error correction"},
    {"rank": 3, "topic": "Solid state EV batteries"},
    {"rank": 4, "topic": "Rust language adoption"},
    {"rank": 5, "topic": "WebAssembly edge computing"}
]

@app.get("/api/news")
def get_news():
    return {"status": "success", "data": MOCK_NEWS}

@app.get("/api/trends")
def get_trends():
    return {"status": "success", "data": MOCK_TRENDS}

@app.get("/")
def root():
    return {"message": "Welcome to Tech News API"}
