from http import server
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import items, users

app = FastAPI(
    title="FastAPI Sample App",
    description="FastAPIのサンプル",
    version="0.1.0",
    servers=[
        # generate-clientのBASE URLに関わる
        {"url": "http://localhost:8000", "description": "ローカル環境"},
    ]
)

# CORS設定
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(items.router)
app.include_router(users.router)


@app.get("/")
def read_root():
    return {"HELLO": "WORLD", "name": "Steve Nobs"}
