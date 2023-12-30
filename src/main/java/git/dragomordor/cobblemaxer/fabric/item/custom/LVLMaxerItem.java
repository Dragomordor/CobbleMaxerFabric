package git.dragomordor.cobblemaxer.fabric.item.custom;

import com.cobblemon.mod.common.Cobblemon;
import com.cobblemon.mod.common.entity.pokemon.PokemonEntity;
import com.cobblemon.mod.common.pokemon.Pokemon;
import net.fabricmc.fabric.api.item.v1.FabricItemSettings;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.ItemStack;
import net.minecraft.text.Text;
import net.minecraft.util.ActionResult;

public class LVLMaxerItem extends PokemonUseItem{

    public LVLMaxerItem() {
        super(new FabricItemSettings().maxCount(1));
    }

    @Override
    public ActionResult processInteraction(ItemStack itemStack, PlayerEntity player, PokemonEntity target, Pokemon pokemon) {

        int maxLevel = Cobblemon.config.getMaxPokemonLevel(); // maximum level of Pokémon allowed by config
        pokemon.setLevel(maxLevel);
        itemStack.setCount(itemStack.getCount() - 1); // remove item after use
        player.sendMessage(Text.of(("Pokémon level maximized!")));
        return ActionResult.SUCCESS;
    }
}
