# frozen_string_literal: true

require 'rails_helper'

RSpec.describe QuestionComment, type: :model do
  describe 'association' do
    it { is_expected.to belong_to(:user).with_foreign_key(:user_id)  }
    it { is_expected.to belong_to(:question).with_foreign_key(:question_id)  }
  end

  describe 'attributes' do
    it { is_expected.to respond_to(:content) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:content) }
  end
end
