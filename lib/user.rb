class User 
    def initialize(name:, age:)
      @name = name
      @age = age
    end
  
  
    def greet
      if @age <= 12
        "僕は#{@name}だよ"
      else
        "僕は#{@name}です"
      end
    end
  end