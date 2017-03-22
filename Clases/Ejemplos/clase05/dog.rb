require_relative 'animal'
require_relative 'debuger'

# Class for representing dogs
class Dog < Animal
  include Debuger

  def initialize(*args)
    @name, @breed = args
  end

  def eat
    p 'I am eating'
  end

  def bark
    p "My name is #{@name}"
    p "My breed is #{@breed}"
    p 'Woof'
  end

  def to_s
    @name
  end

  def bury(**things, &block)
    things.each do |thing, place|
      puts "Burying #{thing} in #{place}..." if !block || yield(thing)
    end
  end
end
