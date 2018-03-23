require 'test_helper'

class SchmosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @schmo = schmos(:one)
  end

  test "should get index" do
    get schmos_url
    assert_response :success
  end

  test "should get new" do
    get new_schmo_url
    assert_response :success
  end

  test "should create schmo" do
    assert_difference('Schmo.count') do
      post schmos_url, params: { schmo: { address: @schmo.address, balance: @schmo.balance, email: @schmo.email, name: @schmo.name, ph: @schmo.ph } }
    end

    assert_redirected_to schmo_url(Schmo.last)
  end

  test "should show schmo" do
    get schmo_url(@schmo)
    assert_response :success
  end

  test "should get edit" do
    get edit_schmo_url(@schmo)
    assert_response :success
  end

  test "should update schmo" do
    patch schmo_url(@schmo), params: { schmo: { address: @schmo.address, balance: @schmo.balance, email: @schmo.email, name: @schmo.name, ph: @schmo.ph } }
    assert_redirected_to schmo_url(@schmo)
  end

  test "should destroy schmo" do
    assert_difference('Schmo.count', -1) do
      delete schmo_url(@schmo)
    end

    assert_redirected_to schmos_url
  end
end
