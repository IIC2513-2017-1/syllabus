require_relative 'dog'

odie = Dog.new('Odie', 'Kiltro')
odie.bury(bone: 'backyard', toy: 'living') do |thing|
  thing.to_s.start_with?('t')
end
