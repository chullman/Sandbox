class CommentsController < ApplicationController

  before_action :set_post

def new
  @comment = Comment.new
end

def create
  @comment = @post.comments.create(comment_params)
  @comment.user_id = current_user.id

  if @comment.save
    flash[:success] = "You commented the hell out of that post!"
    redirect_to posts_path
  else
    flash[:alert] = "Check the comment form, something went horribly wrong."
    render root_path
  end
end

def destroy
  @comment = @post.comments.find(params[:id])

  @comment.destroy
  flash[:success] = "Comment deleted :("
  redirect_to root_path
end

private

def comment_params
  params.require(:comment).permit(:content)
end

def set_post
  @post = Post.find(params[:post_id])
end

end
