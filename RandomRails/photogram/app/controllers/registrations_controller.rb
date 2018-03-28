class RegistrationsController < Devise::RegistrationsController
  # Extending the Devise Reistrations Controller to permit the new user_name field

  private

  def sign_up_params
    params.require(:user).permit(:email, :user_name, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:email, :user_name, :password, :password_confirmation, :current_password)
  end
end