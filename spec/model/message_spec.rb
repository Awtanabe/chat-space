require 'rails_helper'

#  describe ' 四則演算' do
#     user = User.new

#     user.name = "tom"
#     user.email = "aaa@gmail.com"
#     it '1 + 1 = 2'do
#       expect(user.save).to be_truthy
#      end
#  end
    

# it 'バリデーション on contene for presence ' do
#     group = create(:group)
#     user = create(:user)
#     message = Message.create(
#       content: "aaa",
#       image: "eeee",
#       group_id: group.id,
#       user_id: user.id
#     )
#    expect(message).to be_valid
#   end

#   describe 'Relation' do 
#    let!(:user) {FactoryGirl.create(:user)}
#    before {FactoryGirl.create(:message), date: '2019-11-22', (:user):(:message)}
#     it 'should have (親に当たるオブジェクト) with (子に当たるオブジェクト)' do 
#       hoge = user.message.first
#         expect(hoge.date.to_s).to eq '2017-11-22'
#       end
#     end
#   end