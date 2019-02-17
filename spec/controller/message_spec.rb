require "rails_helper"

RSpec.describe UsersController, type: :controller do
  it 'validate on contene for presence ' do
    message = Message.new(
      content: "aaa",
      image: "eeee"
    )
   expect(message).to be_valid
  end
end


# describe '#update' do
#     before(:user) do
#        @user = create(:user)
#        @oroginalname = @user.name
#     end
#    context 'emailを更新する ' do
#       before do
#         patch :update, permalink: @user.permalink, user: attributes_for(:user, name: 'hogehoge')
#       end

#        it 'データベースのユーザーが更新されること' do
#          @user.reload
#          expect(@user.name).to eq 'hogehoge'
#        end
#    end
#   end