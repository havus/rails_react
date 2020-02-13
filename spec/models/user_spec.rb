# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'association' do
    it { is_expected.to have_many(:answers).with_foreign_key(:user_id) }
    it { is_expected.to have_many(:questions).with_foreign_key(:user_id) }
    it { is_expected.to have_many(:question_comments).with_foreign_key(:user_id) }
    it { is_expected.to have_many(:question_votes).with_foreign_key(:user_id) }
  end

  describe 'attributes' do
    it { is_expected.to respond_to(:email) }
    it { is_expected.to respond_to(:first_name) }
    it { is_expected.to respond_to(:last_name) }
    it { is_expected.to respond_to(:image_url) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:encrypted_password) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
  end
end
