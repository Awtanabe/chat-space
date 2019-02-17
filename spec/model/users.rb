require 'rails_helper'


RSpec.describe User, type: :model do
  
  it 'userを削除すると messageも削除される' do
    user = create(:user)
    let(:group){ Group.create(name:"test") }
    blogs = user.messages.create(content:"aa",image:"aaa",groud_id: group.id)
     
    expect(user.destoroy).to change{ Message.count }.by(-1)
  end

end
