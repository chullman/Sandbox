class SchmosController < ApplicationController
  before_action :set_schmo, only: [:show, :edit, :update, :destroy]

  # GET /schmos
  # GET /schmos.json
  def index
    @schmos = Schmo.all
    @notes = Note.all
  end

  # GET /schmos/1
  # GET /schmos/1.json
  def show
  end

  # GET /schmos/new
  def new
    @schmo = Schmo.new
  end

  # GET /schmos/1/edit
  def edit
  end

  # POST /schmos
  # POST /schmos.json
  def create
    @schmo = Schmo.new(schmo_params)

    respond_to do |format|
      if @schmo.save
        format.html { redirect_to @schmo, notice: 'Schmo was successfully created.' }
        format.json { render :show, status: :created, location: @schmo }
      else
        format.html { render :new }
        format.json { render json: @schmo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /schmos/1
  # PATCH/PUT /schmos/1.json
  def update
    respond_to do |format|
      if @schmo.update(schmo_params)
        format.html { redirect_to @schmo, notice: 'Schmo was successfully updated.' }
        format.json { render :show, status: :ok, location: @schmo }
      else
        format.html { render :edit }
        format.json { render json: @schmo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /schmos/1
  # DELETE /schmos/1.json
  def destroy
    @schmo.destroy
    respond_to do |format|
      format.html { redirect_to schmos_url, notice: 'Schmo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schmo
      @schmo = Schmo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def schmo_params
      params.require(:schmo).permit(:name, :address, :ph, :email, :balance)
    end
end
