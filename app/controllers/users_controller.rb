class UsersController < ApplicationController
   before_action :set_user
   def index
     @user = User.where('name LIKE(?)', "%#{params[:keyword]}%").where.not(id:current_user)
     respond_to do |format|
       format.html
       format.json
     end
   end

   def search
      @users = User.search(params[:keyword])

   end

   def edit

   end

   def create
     @user  =  @current_user.new(user_params)
     if @user.save
       respond_to do |format|
         format.html { redirect_to edit_user_path }
         format.json
       end
     end
   end

  def update

    if @current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :avatar)
  end

  def set_user
    @current_user = current_user
  end
end
