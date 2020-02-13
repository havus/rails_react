# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Questions', type: :request do
  let(:model_attribute_keys) { %w[title content] }

  describe 'request a list of all hello world' do
    let(:endpoint_path) { api_v1_questions_path }
    let(:outer_keys) { %w[message data] }

    it 'should return ok response' do
      get endpoint_path

      expect(response.status).to eq 200
    end

    it 'should return the correctly structured response body' do
      get endpoint_path

      parsed_body = JSON.parse(response.body)

      expect(parsed_body.keys).to match_array outer_keys
      expect(parsed_body['message']).to be_kind_of String
      expect(parsed_body['data']).to be_kind_of Array
    end
  end
end
