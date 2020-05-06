# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false,index: true|

## Association
 - has many :comments
 - has_many :groups, through: :groups_users
 - has_many :groups_users

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user|references|null: false, foreign_key: true|
|group|references|null: false|

## Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## Association
- has_many :comments
- has_many :users,  through:  :groups_users
- has_many :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

json.user_name @message.user.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @message.content
json.image @message.image_url
json.id @message.id