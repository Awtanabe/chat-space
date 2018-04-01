# README 最新


#DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true,index: true|

### Association
- has_many :messages
- has_many :membsers
- has_many :groups, through: :members



## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true|

### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, |
|group_id|reference|null: false, |

### Association
- belongs_to :group
- belongs_to :user



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true,index: true|
|image|string|null: false, foreign_key: true,index: true|
|user_id|integer|null: false, foreign_key: true,index: true|
|group_id|integer|null: false, foreign_key: true,index: true|

### Association
- belongs_to :user
- belongs_to :group


