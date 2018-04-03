class CommentsController < ApplicationController

  before_action :set_post

def new
  @comment = Comment.new
end

def create
  @comment = @post.comments.create(comment_params)

  if @comment.content.empty?
    flash[:alert] = "Comment can't be empty"
    redirect_to posts_path
    return
  end

  @comment.user_id = current_user.id


  if @comment.save
    flash[:success] = "You commented the hell out of that post!"
    redirect_to posts_path
  elsif @comment.content.empty?
    flash[:alert] = "Comment can't be empty"
    render posts_path
  else
    flash[:alert] = "Check the comment form, something went horribly wrong."
    redirect_to posts_path
  end
end

def destroy
  @comment = @post.comments.find(params[:id])

  if current_user == @comment.user
    @comment.destroy
    flash[:success] = "Comment deleted :("
    redirect_to root_path
  else
    flash[:alert] = "You are not authorised to delete this comment"
    redirect_to root_path
  end
end

private

def comment_params
  params.require(:comment).permit(:content)
end

def set_post
  @post = Post.find(params[:post_id])
end

end
