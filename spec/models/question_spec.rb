# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'association' do
    it { is_expected.to belong_to(:user).with_foreign_key(:user_id) }

    it { is_expected.to have_many(:answers).with_foreign_key(:question_id) }
    it { is_expected.to have_many(:comments).with_foreign_key(:question_id) }
    it { is_expected.to have_many(:votes).with_foreign_key(:question_id) }
    it { is_expected.to have_many(:question_tags).with_foreign_key(:question_id) }
    it { is_expected.to have_many(:tags).through(:question_tags) }
  end

  describe 'attributes' do
    it { is_expected.to respond_to(:title) }
    it { is_expected.to respond_to(:content) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:content) }
  end
end
