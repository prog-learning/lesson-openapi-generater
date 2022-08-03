FROM python:3.10-slim as builder

WORKDIR /usr/src/app

RUN pip install poetry

COPY pyproject.toml poetry.lock ./

RUN poetry export -f requirements.txt > requirements.txt


FROM python:3.10-slim

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "fast_api.main:app", "--host", "0.0.0.0", "--port", "8000"]

# 参考：https://fastapi.tiangolo.com/deployment/docker/#docker-image-with-poetry
# Dockerにpoetryを入れる必要がないので, requirements.txt を生成して使う