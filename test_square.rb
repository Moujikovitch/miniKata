require 'test/unit'
require './square'

class Test_Carre < Test::Unit::TestCase
	def test_2_donne_4
		assert_equal 4 , carre(2)
	end
	def test_array_donne_SIMPLONMARS
		assert_equal "SIMPLONMARS" , Simplon.tableau()
	end
	def test_string_donne_nombre
		assert_equal 24 , Simplon.convertisseur("24")
	end
	def test_navalbattle
		assert_equal "top left", navalbattle(0,0)
	end
end
