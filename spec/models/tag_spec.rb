# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Tag, type: :model do
  describe 'association' do
    it { is_expected.to have_many(:question_tags).with_foreign_key(:tag_id)  }
    it { is_expected.to have_many(:questions).through(:question_tags)  }
  end

  describe 'attributes' do
    it { is_expected.to respond_to(:name) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end
end
