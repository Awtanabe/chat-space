  json.array! @new_messages.each do |message|
  json.content       message.content
  json.image         message.image.url
  json.id            message.id
  json.name          message.user.name
  json.created_at  message.created_at
  end