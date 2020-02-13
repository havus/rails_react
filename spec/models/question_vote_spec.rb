# frozen_string_literal: true

require 'rails_helper'

RSpec.describe QuestionVote, type: :model do
  describe 'association' do
    it { is_expected.to belong_to(:user).with_foreign_key(:user_id)  }
    it { is_expected.to belong_to(:question).with_foreign_key(:question_id)  }
  end

  describe 'attributes' do
    it { is_expected.to respond_to(:vote_type) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:vote_type) }
  end
end
