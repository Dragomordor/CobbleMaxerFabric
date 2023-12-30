package git.dragomordor.cobblemaxer.fabric;

import git.dragomordor.cobblemaxer.fabric.item.CobblemaxerItems;
import net.fabricmc.api.ModInitializer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CobblemaxerMod implements ModInitializer {
    public static final Logger LOGGER = LogManager.getLogger(CobblemaxerMod.class); // create logger
    public static final String MODID = "cobblemaxer"; // mod ID
    @Override
    public void onInitialize() {

        // Register items and creative mode tabs
        CobblemaxerItems.registerModItems();
    }
}
