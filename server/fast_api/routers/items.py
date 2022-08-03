from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter(
    prefix="/items",
    tags=["items"],
    responses={404: {"description": "Not found"}},
)


# リクエストボディの型を定義
class Item(BaseModel):
    id: int = Field(..., example=1, description="item id")
    content: str = Field(..., example="宿題をやる", description="タスクの内容")
    done: bool = Field(False, example=True, description="完了かどうか")


# サンプルデータ
item_list = [
    {"id": 1, "content": "お洗濯", "done": False},
    {"id": 2, "content": "掃除", "done": False},
    {"id": 3, "content": "買い物", "done": False},
    {"id": 4, "content": "料理", "done": False},
    {"id": 5, "content": "勉強", "done": False},
    {"id": 6, "content": "運動", "done": False},
    {"id": 7, "content": "仕事", "done": False},
    {"id": 8, "content": "その他", "done": False},
]


# response_modelで返却する型を指定できる
@router.get("/", response_model=list[Item], summary="タスクリストを全て取得")
async def get_items():
    return item_list


@router.get("/{item_id}", response_model=Item)
async def get_item_by_id(item_id: int):
    for item in item_list:
        if item["id"] == item_id:
            return item
    return {"message": "Not Found"}


@router.post("/", response_model=Item, summary="タスクリストを新しく作成")
async def create_item(item: Item):
    item_list.append(item.dict())
    return item


@router.put("/{item_id}", response_model=Item)
async def update_item(item_id: int, item: Item):
    for i, item in enumerate(item_list):  # enumerate関数でindexと要素を取得できる
        if item["id"] == item_id:
            item_list[i] = item.dict()
            return item
    return {"message": "Not Found"}


@router.delete("/{item_id}", response_model=Item)
async def delete_item(item_id: int):
    for i, item in enumerate(item_list):
        if item["id"] == item_id:
            item_list.pop(i)
            return item
    return {"message": "Not Found"}
