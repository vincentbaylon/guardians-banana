class BattleSerializer < ActiveModel::Serializer
  attributes :id, :turn, :attack_type, :damage

  has_one :player_character
  has_one :non_player_character
end
