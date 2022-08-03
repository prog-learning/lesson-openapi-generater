from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


# リクエストボディの型を定義
class User(BaseModel):
    id: int
    name: str = Field(..., example="Steve Nobs", description="ユーザー名")
    is_active: bool = Field(False, example=True, description="有効かどうか")


# サンプルデータ
user_list = [
    {"id": 1, "name": "Steve Nobs", "is_active": True},
    {"id": 2, "name": "John Doe", "is_active": True},
    {"id": 3, "name": "Mary Smith", "is_active": True},
    {"id": 4, "name": "Jane Smith", "is_active": True},
]


@router.get("/", response_model=list[User])  # response_modelで返却する型を指定できる
async def get_users():
    return user_list


@router.get("/{user_id}", response_model=User)
async def get_user_by_id(user_id: int):
    for item in user_list:
        if item["id"] == user_id:
            return item
    return {"message": "Not Found"}
